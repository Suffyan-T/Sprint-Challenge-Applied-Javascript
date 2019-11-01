// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');


    const dateSpan = document.createElement('span');
    headerDiv.appendChild(dateSpan);
    dateSpan.textContent = `MARCH 28, 2019`;
    dateSpan.classList.add('date');

    const lambdaTimes= document.createElement('h1');
    headerDiv.appendChild(lambdaTimes);
    lambdaTimes.textContent = `Lambda Times`;

    const temp = document.createElement('span');
    headerDiv.appendChild(temp);
    temp.textContent = `98°`;
    temp.classList.add('temp');


    let headerContainer = document.querySelector('.header-container'); 
    headerContainer.appendChild(headerDiv);
}

Header();


