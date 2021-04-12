let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



Book.prototype.info = function() {
  return title + " by " + author + ", " + pages + " pages, " + read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks(library) {
  table = document.getElementById('contentTable');
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let status
    if(book.read){
      status="Yes";
    }else{
      status="No";
    }

    let row=document.createElement('tr');
    let title=document.createElement('td');
    let author=document.createElement('td');
    let pages=document.createElement('td');
    let read=document.createElement('td');

    author.innerHTML=book.author
    title.innerHTML=book.title
    pages.innerHTML=book.title
    read.innerHTML=status

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);

    table.appendChild(row);

  }
}
