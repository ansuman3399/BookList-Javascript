function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
function UI() {}
/* Adding book to the list post successful validation */
UI.prototype.addBookToList = function (book) {
  let list = document.getElementById("book-list");
  let newBook = document.createElement("tr");
  (title = document.createElement("td")),
    (author = document.createElement("td")),
    (isbn = document.createElement("td")),
    (link = document.createElement("td"));

  title.textContent = book.title;
  author.textContent = book.author;
  isbn.textContent = book.isbn;

  let a = document.createElement("a");
  a.href = "#";
  a.className = "delete";
  a.textContent = "X";
  link.appendChild(a);

  newBook.appendChild(title);
  newBook.appendChild(author);
  newBook.appendChild(isbn);
  newBook.appendChild(link);

  list.appendChild(newBook);
  console.log("book added");
};

/* Validating the book details provided */
UI.prototype.validateBook = function (book) {
  console.log("Validating book details");
  const ui = new UI();
  if (book.title !== "" && book.author !== "" && book.isbn !== "") {
    console.log("Successfully validated");
    ui.addBookToList(book);
    ui.setMessage("Book Successfully added!!", "success");
    clearFields();
  } else {
    ui.setMessage("Please enter all the fields", "error");
  }
};
/* submit messages - success/error */
UI.prototype.setMessage = function (message, type) {
  let ui = new UI();
  let container = document.querySelector(".container");
  let form = document.querySelector("#book-form");
  let msg = document.createElement("div");
  msg.textContent = message;
  msg.className = type;
  msg.id = "msg";
  container.insertBefore(msg, form);
  setTimeout(removeMessage, 3000);
};

/* Removing the message after 3 seconds */
removeMessage = function () {
  let container = document.querySelector(".container");
  let msg = document.querySelector("#msg");
  container.removeChild(msg);
};

/* Clearing fields if success */
clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

document.getElementById("book-form").addEventListener("submit", (event) => {
  console.log("Submit event triggered");
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);
  const ui = new UI();
  ui.validateBook(book);
  event.preventDefault();
});

/* Removing element from the list */
document
  .querySelector("#book-list")
  .addEventListener("click", function (event) {
    const ui = new UI();
    ui.removeBook(event.target);
  });

/* Remove book */
UI.prototype.removeBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
    this.setMessage(`Book removed successfully!!`, "success");
  }
};
/* let deleteIcon = document.querySelector(".delete");
if (deleteIcon !== null) {
  deleteIcon.addEventListener("click", (event) => {
    console.log(`Deleting item`);
    let list = document.getElementById("book-list");
    let book = event.target.parentElement;
    console.log(`Book to delete ${book}`);
  });
} */
