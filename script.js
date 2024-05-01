window.addEventListener("DOMContentLoaded", main, false);

function main () {
    const myLibrary = ["book1", "book2", "book3", "book4", "book5"];

    function addBookToLibrary (book) {
        myLibrary.push(book);
    }

    function showLibrary () {
        for (let i = 0; i < myLibrary.length; i++) {
            console.log(myLibrary[i]);
        }
    }
}