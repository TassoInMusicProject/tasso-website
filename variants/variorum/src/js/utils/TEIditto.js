import $ from 'jquery';

var getHTML5 = function (TEI, options={}) {

    var elTable = {};

    $(TEI).find(':root').find('*').andSelf().each(function(i,el){
        elTable[el.tagName] = "tei-" + el.tagName;
    });

    for (let el of Object.keys(elTable)){
        // Only register if custom elements are supported
        if (document.registerElement){
            let template = null;
            let teiEl = elTable[el];
            if (document.createElement(teiEl).constructor !== HTMLElement) {
                registered_el = document.registerElement(teiEl, template);            
            }
        }
    }

    let convertEl = function (el) {
        let newElement = $("<"+elTable[el.tagName]+">");
        $.each(el.attributes, function(index){
            $(newElement).attr(el.attributes[index].name, el.attributes[index].value);
        });
        let contents = $(el).contents();
        if (contents.length) {
            contents.each(function(i, node){
                if (node.nodeType == 1){                    
                    newElement.append(convertEl(node));
                } 
                else newElement.append(node.cloneNode());
            });
        }
        return newElement;
    }
    return convertEl($(TEI).children().get(0));
}

export default getHTML5;