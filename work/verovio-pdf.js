// vim: ts=3


//////////////////////////////
//
// generatePdfFull -- Write a multi-page PDF of the full score in the text editor.
//
function generatePdfFull(format, orientation) {
	var oldOptions = vrvOptions;

	// need to explicitly disable mmOutput = 1 set by the printing process.
	oldOptions.mmOutput = 0;

	$('html').css('cursor', 'wait');
	var format = format ? format : "letter";
	var orientation = orientation ? orientation : "portrait";
	var width = 2159;
	var height = 2794;
	if (format === "A4") {
		width = 2100;
		height = 2970;
	} else if (format === "B3") {
		width = 2500;
		height = 3530;
	}
	if (orientation === "landscape") {
		width = [height, height = width][0];
	}
	var fontCallback = function(family, bold, italic, options) {
		if (family == "VerovioText") {
			return family;
		}
		if (family.match(/(?:^|,)\s*sans-serif\s*$/) || true) {
			if (bold && italic)    {return 'Times-BoldItalic'}
			if (bold && !italic)   {return 'Times-Bold'      }
			if (!bold && italic)   {return 'Times-Italic'    }
			if (!bold && !italic)  {return 'Times-Roman'     }
		}
	};
	var pdfOptions = {};
	pdfOptions.fontCallback = fontCallback;
	var pdf = new PDFDocument({
		useCSS:        true,
		compress:      true,
		autoFirstPage: false,
		layout:        orientation
	});
	var stream = pdf.pipe(blobStream());
	stream.on('finish', function() {
		var blob = stream.toBlob('application/pdf');
		var pdfFilename = "output.pdf";
		var pdfFilename;
		if (SAVEFILENAME) {
			pdfFilename = SAVEFILENAME.replace(/\.[^.]*$/, "") + ".pdf";
		} else {
			pdfFilename = "output.pdf";
		}
		saveAs(blob, pdfFilename);
		$('html').css('cursor', 'auto');
	});
	var buffer = Uint8Array.from(atob(vrvTTF), c => c.charCodeAt(0));
	pdf.registerFont('VerovioText', buffer);
	var localOptions = {
		pageHeight:       height,
		pageWidth:        width,
		border:           50,
		scale:            100,
		spacingSystem:    2,
		adjustPageHeight: 0,
		ignoreLayout:     1,
		mmOutput:         1,
		font:             "Leipzig"
	}
	var scoredata = EDITOR.getValue().replace(/^\s+/, "");
	vrv.renderAllPages(scoredata, localOptions)
	.then(function(svglist) {
		for (var i=0; i<svglist.length; i++) {
			pdf.addPage({size: format, layout: orientation});
			var x = 0;
			var y = 0;
			SVGtoPDF(pdf, svglist[i], x, y, pdfOptions);
		}
		pdf.end();
		return true;
	})
	.then(function() {
		// restore the old layout for the VHV  webpage:
		var force = false;
		var page = vrv.page;
		vrv.redoLayout(oldOptions, true);
		vrv.options = oldOptions;
	});
}
