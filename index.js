const newBookButton = document.querySelector(".newBook");
const cardContainer = document.querySelector(".card-container");
const wholePage = document.querySelector(".whole-page");
const submitButton = document.querySelector('.enter');
const booksSection = document.querySelector('.books');

//let cards = document.getElementsByClassName(".book-card");

let cards = booksSection.childNodes;



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}  

function addBook(book) {
    myLibrary.push(book);
}

newBookButton.addEventListener("click", e => {
    cardContainer.classList.toggle("hidden");
    booksSection.style.display = "none";
    cardContainer.classList.add("shown");

});

submitButton.addEventListener("click", e => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const numPages = document.querySelector("#numPages").value;
    const readBook = document.querySelector("#readBook").checked;
    if (title != "" && author != "" && numPages != "") {
        cardContainer.classList.toggle("hidden");
        booksSection.style.display = "grid";
        const newBook = new Book(title, author, numPages, readBook);
        myLibrary.push(newBook);

        const card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("id", myLibrary.length.toString());

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete");
        card.appendChild(deleteButton);

        const titleElement = document.createElement("span");
        titleElement.textContent = newBook.title;
        titleElement.classList.add("card-title");
        card.appendChild(titleElement);

        const authorElement = document.createElement("span");
        authorElement.textContent = "Author: " + newBook.author;
        authorElement.classList.add("card-author");
        card.appendChild(authorElement);

        const numPagesElement = document.createElement("span");
        numPagesElement.textContent = "Pages: " + newBook.pages;
        numPagesElement.classList.add("card-pages");
        card.appendChild(numPagesElement);

        const readWrapper = document.createElement("div");
        readWrapper.classList.add("card-read");
        const readText = document.createElement("span");
        readText.textContent = newBook.read == false ? "Not Read" : "Read"; 
        readWrapper.style.backgroundColor = newBook.read == false ? "#D65A31" : "#31d65a";
        readWrapper.appendChild(readText);
        card.appendChild(readWrapper);

        booksSection.appendChild(card);

        cards.forEach((nodes, index) => {
            if (index == 0) {
                return;
            }
            nodes.childNodes[0].addEventListener("click", e => {
                cards[index].replaceWith("");
                myLibrary.splice(index - 1, 1);
            })
        });
        
        
    }
    //clear form no matter what 
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#numPages").value = "";
    document.querySelector("#readBook").checked = false;
}); 




