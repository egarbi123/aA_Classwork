export const partyHeader = document.getElementById('party');

// string gets converted to a <p> tag
// then gets appended to the input of htmlElement
export const htmlGenerator = (string, htmlElement) => {
    const myNewElement = document.createElement('p');
    myNewElement.innerHTML = string;
    htmlElement.appendChild(myNewElement);
};

// htmlGenerator('Party Time.', partyHeader);

// export default htmlGenerator;