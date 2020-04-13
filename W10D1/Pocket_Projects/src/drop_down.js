const dogs = {
    "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
    "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
    "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
    "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
    "Tosa": "https://www.akc.org/dog-breeds/tosa/",
    "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
    "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/"
};

function dogLinkCreator(obj) {
    // let output = [];
    let keys = Object.keys(obj);
    let ul = document.querySelector('ul.drop-down-dog-list');
    for (let i = 0; i < keys.length; i++) {
        let atag = document.createElement('a');
        atag.innerHTML = keys[i];
        atag.href = obj[keys[i]];
        let liTag = document.createElement('li')
        liTag.className = 'dog-link';
        liTag.append(atag);
        ul.append(liTag);
        // output.push(liTag);
    }
    // console.log(output);
    // return output;
}

dogLinkCreator(dogs);

let h3 = document.getElementById('dogsH3');

let ul = document.querySelector('ul.drop-down-dog-list');

h3.addEventListener('mouseover', (e) => {
    ul.setAttribute('style', 'display: block');
})

ul.addEventListener('mouseover', (e) => {
    ul.setAttribute('style', 'display: block');
})

ul.addEventListener('mouseleave', function(e) {
    ul.setAttribute('style', 'display: none');
})

h3.addEventListener('mouseleave', function(e) {
    ul.setAttribute('style', 'display: none');
})



export { dogLinkCreator }
// export dogLinkCreator