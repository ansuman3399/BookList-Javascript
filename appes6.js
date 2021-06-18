class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  /* Adding book to the list post successful validation */
  addBookToList(book) {
    console.log("Adding book");
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
  }
  /* submit messages - success/error */
  setMessage(message, type) {
    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    let msg = document.createElement("div");
    msg.textContent = message;
    msg.className = type;
    msg.id = "msg";
    container.insertBefore(msg, form);
    setTimeout(removeMessage, 3000);
  }
  /* Removing the message after 3 seconds */
  removeMessage() {
    let container = document.querySelector(".container");
    let msg = document.querySelector("#msg");
    container.removeChild(msg);
  }
  /* Clearing fields if success */
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
  /* Validating the book details provided */
  validateBook(book) {
    console.log("Validating book details");
    if (book.title !== "" && book.author !== "" && book.isbn !== "") {
      console.log("Successfully validated");
      addBookToList(book);
      setMessage("Book Successfully added!!", "success");
      clearFields();
    } else {
      setMessage("Please enter all the fields", "error");
    }
  }

  /* Remove book */
  removeBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      this.setMessage(`Book removed successfully!!`, "success");
    }
  }
}

const user = new UI();
console.log(user);
document.getElementById("book-form").addEventListener("submit", (event) => {
  console.log("Submit event triggered");
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  const book = new Book(title, author, isbn);
  user.validateBook(book);
  //   user.addBookToList(book);
  event.preventDefault();
});

/* Removing element from the list */
document
  .querySelector("#book-list")
  .addEventListener("click", function (event) {
    user.removeBook(event.target);
  });
