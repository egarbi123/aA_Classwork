const DomNodeCollection = require('./dom_node_collection')

const $l = function(arg1) {
    const elementList = document.querySelectorAll(arg1);
    const arrayList = Array.from(elementList);
    // debugger;
    if (arg1 instanceof HTMLElement || typeof arg1 === 'string') {
        let collectionObject = new DomNodeCollection(arrayList);
        return collectionObject;
    }
}

window.$l = $l;