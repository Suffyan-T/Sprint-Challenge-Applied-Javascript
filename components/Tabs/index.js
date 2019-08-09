// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topicsSection = document.querySelector('.topics');
function createTab(elem) {
    //define new elements
    const tab = document.createElement('div');
     
    //set up structure of elements
    topicsSection.appendChild(tab);
    
    //set class names
    tab.classList.add('tab');

    //set text content
    tab.textContent = elem;

    //Add an event listener
    tab.addEventListener('click', (e) => {
        tab.classList.toggle('active-tab');
      })
    
    //return tab
    return tab; 
    }




axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( data => {
    console.log(data.data.topics);
    data.data.topics.forEach(element => {
        createTab(element);

    });
  })
  .catch (err => {
    console.log(err.message);
  })