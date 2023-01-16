let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Read in from Interface

const addBook = document.getElementById("new-book");
const bookSubmit = document.getElementById("book-submit");
const bookCancel = document.getElementById("book-stop");
const addBookWrapper= document.getElementById("add-book-wrapper");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const libraryContainer = document.getElementById("books-container")
const addBookForm = document.getElementById("add-book-form");

//Functions

function addBooktoList (ev) {
    ev.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = bookRead.value;
    let bookEntry = new Book(title, author, pages, read);
    myLibrary.push(bookEntry);
    createBookCard(bookEntry);
    addBookForm.reset();
}

function createBookCard(bookEntry) {
    const bookCard = document.createElement("div");
    const bookCardTitle = document.createElement("h3");
    const bookCardAuthor = document.createElement("h3");
    const bookCardPages = document.createElement("h3");
    const bookCardRead = document.createElement("button");
    const bookCardRemove = document.createElement("button");
    const bookCardButtonWrapper = document.createElement("div");

    bookCard.classList.add("book-box");
    bookCardTitle.classList.add("book-title");
    bookCardAuthor.classList.add("book-author");
    bookCardPages.classList.add("book-pages");
    bookCardButtonWrapper.classList.add("buttons-wrapper");
    bookCardRead.classList.add("book-read");
    bookCardRemove.classList.add("book-remove");

    bookCardTitle.textContent = `${bookEntry.title}`
    bookCardAuthor.textContent = `${bookEntry.author}`
    bookCardPages.textContent = `${bookEntry.pages}`
    bookCardRead.textContent = "Read"
    bookCardRemove.textContent = "Remove"

    libraryContainer.appendChild(bookCard);
    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardPages);
    bookCard.appendChild(bookCardButtonWrapper);
    bookCardButtonWrapper.appendChild(bookCardRead);
    bookCardButtonWrapper.appendChild(bookCardRemove);

    bookCardRead.addEventListener("click", () => {
        if (bookCardRead.textContent === "Read") {
            bookCardRead.style.backgroundColor = "var(--cancel-red)"
            bookCardRead.textContent = "Not Read"
        } else {
            bookCardRead.style.backgroundColor = "var(--confirm-green)"
            bookCardRead.textContent = "Read"
        }
    })

    bookCardRemove.addEventListener("click", () => {
        bookCard.remove();
    })
}

//Event Listeners

addBook.addEventListener('click', () => {
    addBookWrapper.style.display = "flex";
})

bookSubmit.addEventListener("click", addBooktoList)

bookSubmit.addEventListener("click", () => {
    addBookWrapper.style.display="none";
})

bookCancel.addEventListener("click", () => {
    addBookWrapper.style.display="none";
})