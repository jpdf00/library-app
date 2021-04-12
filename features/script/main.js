const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks(library) {
  const table = document.getElementById('contentTable');
  table.innerHTML = null;
  for (let i = 0; i < library.length; i += 1) {
    const book = library[i];
    let status;
    if (book.read) {
      status = 'Yes';
    } else {
      status = 'No';
    }

    const row = document.createElement('tr');
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');
    const opt = document.createElement('td');

    const rmButton = document.createElement('button');
    rmButton.setAttribute('onClick', `deleteItem("${i}")`);
    rmButton.setAttribute('class', 'btn btn-danger btn-sm');
    rmButton.textContent = 'Delete';

    const reButton = document.createElement('button');
    reButton.setAttribute('onClick', `changeRead("${i}")`);
    reButton.setAttribute('class', 'btn btn-primary btn-sm');
    reButton.innerHTML = status;

    author.innerHTML = book.author;
    title.innerHTML = book.title;
    pages.innerHTML = book.pages;
    read.appendChild(reButton);
    opt.appendChild(rmButton);

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);
    row.appendChild(opt);

    table.appendChild(row);
  }
}

function deleteItem(index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

function changeRead(index) {
  if (myLibrary[index].read) {
    myLibrary[index].read = false;
  } else {
    myLibrary[index].read = true;
  }
  displayBooks(myLibrary);
}

const btn = document.querySelector('#addBooks');

btn.addEventListener('click', () => {
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const read = document.getElementById('checkRead').checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks(myLibrary);
});
