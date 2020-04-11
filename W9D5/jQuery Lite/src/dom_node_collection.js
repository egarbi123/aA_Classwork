class DomNodeCollection {
    constructor(arrayNodes) {
        this.arrayNodes = arrayNodes;
    }

    html(string = null) {
        if (string === null) {
            return this.arrayNodes[0].innerHTML;
        } else {
            for (let i = 0; i < this.arrayNodes.length; i++) {
                this.arrayNodes[i].innerHTML = string;
            }
        }
    }

    empty() {
        this.html("");
    };

    append(children) {
        // debugger;
        for (let i = 0; i < this.arrayNodes.length; i++) {
            this.arrayNodes[i].innerHTML += children;
        }
    }

    attr(attribute, value) {
        // returns the value of the attribute for the specified selector
        // alert $("img").attr("width")
        // $(selector).attr(attribute)
        let attr = `${attribute}: ${value}`
        for (let i = 0; i < this.arrayNodes.length; i++) {
            this.arrayNodes[i].setAttribute('style', attr);
        }
    }

    addClass() {

    }

    removeClass() {

    }

}

module.exports = DomNodeCollection;