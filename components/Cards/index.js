// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let cardsContainer= document.querySelector('.cards-container');
cardsContainer.classList.add('cards-container');



function createArticle(elem) {
    //define new elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const byAuthorName = document.createElement('span');
     
    //set up structure of elements
    cardsContainer.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(byAuthorName);
    
    //set class names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');
    img.classList.add('img');

    //set text content
    headline.textContent = `${elem.headline}`;
    byAuthorName.textContent = `By ${elem.authorName}`;
    img.src = `${elem.authorPhoto}`;
    
    //return tab
    return card; 
    }






// Javascript Cards
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( data => {
      console.log(data);
    data.data.articles.javascript.forEach(element => {
        createArticle(element);
    });
  })
  .catch (err => {
    console.log(err.message);
  })


  // Bootstrap Cards
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( data => {
  data.data.articles.bootstrap.forEach(element => {
      createArticle(element);
  });
})
.catch (err => {
  console.log(err.message);
})


// Technology Cards
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( data => {
    data.data.articles.technology.forEach(element => {
        createArticle(element);
    });
  })
  .catch (err => {
    console.log(err.message);
  })


  // JQuery Cards
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( data => {
  data.data.articles.jquery.forEach(element => {
      createArticle(element);
  });
})
.catch (err => {
  console.log(err.message);
})


// Node.js Cards
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( data => {
    data.data.articles.node.forEach(element => {
        createArticle(element);
    });
  })
  .catch (err => {
    console.log(err.message);
  })