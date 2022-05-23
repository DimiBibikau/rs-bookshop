
const booksJSON = [{
    "author": "Douglas Crockford",
    "imageLink": "./assets/images/JavaScript-The-Good-Parts.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "./assets/images/Effective-JavaScript.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "./assets/images/The-Definitive-Guide.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "author": " Eric Elliott",
      "imageLink": "./assets/images/Programming-JavaScript-Applications.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "author": "Addy Osmani",
      "imageLink": "./assets/images/Learning-JavaScript-Design-Patterns.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "author": "Boris Cherny",
      "imageLink": "./assets/images/Programming-TypeScript.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "./assets/images/Learning-React.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "./assets/images/Node-in-Action.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "author": "Kyle Simpson",
      "imageLink": "./assets/images/You-Dont-Know-JS.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "author": "John Resig and Bear Bibeault",
      "imageLink": "./assets/images/JavaScript-Ninja.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ]

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
document.querySelector('.logo').src = './assets/images/logo.jpg'
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
//create the order button
tagCreator('button', 'button-confirm-order', '.shopping-cart');  
document.querySelector('.button-confirm-order').textContent = 'Confirm order';
tagCreator('include', 'shopping-cart-form', '.shopping-cart');

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

//make the button create the checkout form
const buttonCheckout = document.querySelectorAll('.button-confirm-order');
buttonCheckout.addEventListener('click', () => {
    const formLink = './form.html'
    document.querySelectorAll('.shopping-cart-form').src = formLink;
})


//form management

// const form = document.querySelector('form');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');

// const form = document.querySelector('form');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const lname = document.getElementById('pencil');

// const para = document.querySelector('p'); // the future comment line!

// const form = document.querySelector('.form');

// form.addEventListener('submit', () => {
//     const checkBox = document.getElementById('gift').checked
//     console.log(checkBox)
// })