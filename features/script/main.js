const myLibrary = [];

const Book = (title, author, pages, read) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;
  const toggleRead = x => {
    read = x;
  };
  return {
    getTitle, getAuthor, getPages, getRead, toggleRead,
  };
};

function addBookToLibrary(title, author, pages, read) {
  const book = Book(title, author, pages, read);
  myLibrary.push(book);
}

function drawPage(book, status, i, table) {
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

  title.innerHTML = book.getTitle();
  author.innerHTML = book.getAuthor();
  pages.innerHTML = book.getPages();
  read.appendChild(reButton);
  opt.appendChild(rmButton);

  row.appendChild(title);
  row.appendChild(author);
  row.appendChild(pages);
  row.appendChild(read);
  row.appendChild(opt);

  table.appendChild(row);
}

function displayBooks(library) {
  const table = document.getElementById('contentTable');
  table.innerHTML = null;
  for (let i = 0; i < library.length; i += 1) {
    const book = library[i];
    let status;
    if (book.getRead()) {
      status = 'Yes';
    } else {
      status = 'No';
    }
    drawPage(book, status, i, table);
  }
}

/* eslint-disable */
function deleteItem(index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

function changeRead(index) {
  if (myLibrary[index].getRead()) {
    myLibrary[index].toggleRead(false);
  } else {
    myLibrary[index].toggleRead(true);
  }
  displayBooks(myLibrary);
}
/* eslint-enable */

const btn = document.querySelector('#addBooks');

btn.addEventListener('click', () => {
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const read = document.getElementById('checkRead').checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks(myLibrary);
});
