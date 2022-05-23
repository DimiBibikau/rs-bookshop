
const booksJSON = [
    {
    "author": "Douglas Crockford",
    "imageLink": "./assets/images/start-book-cover.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "./assets/images/start-book-cover.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "../assets/images/start-book-cover.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
  ];

//CREATE Basic structure
const tagCreator = (tag, className, parentTag, indexParentTag = 0) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    document.querySelectorAll(parentTag)[indexParentTag].append(element);
}
//create the basic structure
tagCreator('header', 'header', 'body');

//create the header block
tagCreator('img', 'logo', '.header')
document.querySelector('.logo').src = '/assets/images/logo.jpg'
tagCreator('h1', 'h1', '.header')
document.querySelector('.h1').textContent = 'Welcome to the book shop!'

// create the book catalog
tagCreator('main', 'main', 'body');
tagCreator('div', 'book-catalog', '.main');  

//create the shopping cart block
tagCreator('div', 'shopping-cart', '.main');  
tagCreator('h2', 'shopping-cart-title', '.shopping-cart');  
document.querySelector('.shopping-cart-title').textContent = 'These are the books you want to buy:';
tagCreator('h2', 'shopping-cart-total', '.shopping-cart');  
document.querySelector('.shopping-cart-total').textContent = 'This is how much they cost:';

tagCreator('button', 'button-confirm-order', '.shopping-cart');  
document.querySelector('.button-confirm-order').textContent = 'Confirm order';

//create the footer
tagCreator('footer', 'footer', 'body')
//fill in the footer




for (let book in booksJSON) {
// creating the book card 
    tagCreator('div', 'book-catalog-item', '.book-catalog');
    tagCreator('div', 'book-catalog-item-content', '.book-catalog-item', book);
// creating the book card contents
    tagCreator('img', 'book-catalog-item-img', '.book-catalog-item-content', book);
    tagCreator('h3', 'book-catalog-item-title', '.book-catalog-item-content', book);
    tagCreator('h3', 'book-catalog-item-author', '.book-catalog-item-content', book);
    tagCreator('h4', 'book-catalog-item-price', '.book-catalog-item-content', book);
// create buttons 
    tagCreator('button', 'button-info', '.book-catalog-item-content', book);
    tagCreator('button', 'button-buy', '.book-catalog-item-content', book);
//creating the modal window
    tagCreator('div', 'book-catalog-item-content-info', '.book-catalog-item-content', book);
    tagCreator('h3', 'book-title', '.book-catalog-item-content-info', book);
    tagCreator('p', 'book-description', '.book-catalog-item-content-info', book);
//create close button for the modal window
    tagCreator('button', 'button-close', '.book-catalog-item-content-info', book);

//filling the book card
    document.querySelectorAll('.book-catalog-item-img')[book].src = booksJSON[book].imageLink;
    document.querySelectorAll('.book-catalog-item-title')[book].textContent = booksJSON[book].title;
    document.querySelectorAll('.book-catalog-item-author')[book].textContent =  booksJSON[book].author;
    document.querySelectorAll('.book-catalog-item-price')[book].textContent = `Price: ${booksJSON[book].price} EUR`;
//filling the card buttons
    document.querySelectorAll('.button-buy')[book].textContent = 'Add to the cart!';
    document.querySelectorAll('.button-info')[book].textContent = 'Show more!';
//filling the modal window
    document.querySelectorAll('.book-title')[book].textContent = booksJSON[book].title;
    document.querySelectorAll('.book-description')[book].textContent = booksJSON[book].description;
    document.querySelectorAll('.button-close')[book].textContent = 'Close!';
}

const buttonInfoArray = document.querySelectorAll('.button-info');
const buttonCloseArray = document.querySelectorAll('.button-close');

for (let [index, buttonElem] of buttonInfoArray.entries()) {
    buttonElem.addEventListener('click', () => {
        document.querySelectorAll('.book-catalog-item-content-info')[index].classList.add('active');
    })
}

for (let [index, buttonElem] of buttonCloseArray.entries()) {
    buttonElem.addEventListener('click', () => {
        document.querySelectorAll('.book-catalog-item-content-info')[index].classList.remove('active');
    })
}

