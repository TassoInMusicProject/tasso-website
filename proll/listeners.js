//
// Programmer:   Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri Mar  4 20:44:44 PST 2016
// Last Modified: Tue Mar 28 15:16:25 PDT 2017
// Filename:      proll/listeners.js
// Syntax:        JavaScript 1.8/ECMAScript 5; jQuery 2.0
// vim:           ts=3: ft=javascript
//
// Description:   JavaScript functions for TMP piano-roll display.
//


//////////////////////////////
//
// DOMContentLoaded event listener -- What to do when the page
//    has finished loading.
//

window.addEventListener("DOMContentLoaded",
	function(event) {
		prepareWebpage();
	}
);



//////////////////////////////
//
// resize event listener -- What to do when the page is resized.
//

window.addEventListener("resize",
	function() {
		displayFullHeight();
	}
);



//////////////////////////////
//
// keydown event listener -- What to do when a key is pressed.
//

window.addEventListener('keydown', processKeyCommand);



//////////////////////////////
//
// click event listener --  What to do when when clicking
//    in the window: if clicking on a rect, then start
//    playing the audio at that point.
//

window.addEventListener("click", function(event) {
	if (event.target.nodeName !== "rect") {
		return;
	}
	var clas = event.target.className.baseVal;
	if (!clas) {
		return;
	}
	var matches;
	var info = document.querySelector("#info");
	if (info && (matches = clas.match(/key-(\d+)/))) {
		var key = matches[1];
		console.log("KEY = ", key);
		info.innerHTML = "Pitch: " + MidiToDiatonicPC(key);
	}

	// start playing at that point in music
	var audio = document.querySelector("audio");
	if (!audio) {
		PlayAudioFile2(getJrpid());
		var audio = document.querySelector("audio");
		if (audio) {
			audio.pause();
		}
	}
	var child = audio.firstChild;
	if (child.nodeName !== "SOURCE") {
		PlayAudioFile2(getJrpid());
		audio.pause();
	} else {
		// do nothing
	}
	var matches;
	var ontime = 0;
	if (!audio.paused) {
		audio.pause();
	}
	if (matches = clas.match(/ont-([^\s]+)/)) {
		ontime = matches[1].replace(/d/, '.');
		STARTTIME = parseFloat(ontime) - OFFSET - 0.01;
		if (STARTTIME < 0) {
			STATTIME = 0.001;
		}
		audio.play();
	}
});



//////////////////////////////
//
// processKeyCommand --
//

function processKeyCommand(event) {
	if (event.metaKey) {
         // Ignore keypress if the command key is also pressed.
			return;
	}

	var widthbox = document.querySelector("input#width");
	if (event.target && (event.target.id === widthbox.id)) {
      // Ignore numeric commands if typing numbers in the
      // width box:
		switch (event.keyCode) {
			case ZeroKey:  case OneKey:   case TwoKey:
			case ThreeKey: case FourKey:  case FiveKey:
			case SixKey:   case SevenKey: case EightKey:
			case NineKey:  case MinusKey: case PlusKey:
				return;
		}
	}

   if ((event.keyCode >= ZeroKey) && (event.keyCode <= NineKey)) {
      processDigit(event);
      return;
   }

	switch(event.keyCode) {

			case BKey:
				var svg = document.querySelector("svg");
				if (svg) {
					var background = svg
                                 .querySelector("rect.background");
					if (background) {
						var opacity = background.getAttribute("opacity");
						if (!opacity) {
							opacity = 1.0;
						}
						opacity = 1.0 - opacity;
						background.setAttribute("opacity", opacity);
					}
				}
				break;

			case TKey:
				toggleTitleDisplay();
				break;

			case GKey:
				var gs = document.querySelector("#grand-staff");
				gs.checked = !gs.checked;
				displayStafflines(gs.checked);
				break;

			case HKey:
				displayFullHeight();
				break;

			case LKey:
				var conn = document.querySelector("#note-connectors");
				conn.checked = !conn.checked;
				displayLines(conn.checked);
				break;

			case NKey:
				var minima = document.querySelector("#minima");
				minima.checked = !minima.checked;
				displayMinima(minima.checked);
				break;

			case RKey:
				var round = document.querySelector("#round-notes");
				round.checked = !round.checked;
				displayRound(round.checked);
				break;

			case WKey:
				displayFullWidth();
				break;

			case XKey:
				var maxima = document.querySelector("#maxima");
				maxima.checked = !maxima.checked;
				displayMaxima(maxima.checked);
				break;

			case SpaceKey:
				var audio = document.querySelector("audio");
				if (!audio) {
					PlayAudioFile2(getJrpid());
					var audio = document.querySelector("audio");
					if (audio) {
						audio.pause();
					}
				}
				if (audio) {
					if (audio.paused) {
						audio.play();
					} else {
						audio.pause();
					}
				}
				break;

			case SlashKey:
            toggleHelpMenu();
				break;

			case EscKey:
            toggleHelpMenu(0);
				break;

			case MinusKey:
				var width = document.querySelector("#width");
				var value = width.value;
				value = parseInt(value) - 50;
				if (value < 100) {
				value = 100;
				}
				width.value = value;
				displayWidth(value);
            svgCenterVertically();
				break;

			case EqualsKey:
				var width = document.querySelector("#width");
				var value = width.value;
				value = parseInt(value) + 50;
				if (value > 2800) {
				value = 2800;
				}
				width.value = value;
				displayWidth(value);
            svgCenterVertically();
				break;

			case RightArrowKey:
				if (event.shiftKey) {
					if (event.ctrlKey) {
						displayNextRepertoryPage();
					} else {
						displayNextWorkPage();
					}
				}
				break;
	
			case LeftArrowKey:
				if (event.shiftKey) {
					if (event.ctrlKey) {
						displayPreviousRepertoryPage();
					} else {
						displayPreviousWorkPage();
					}
				}
				break;

	}
	
}


