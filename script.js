window.addEventListener("DOMContentLoaded", main, false);

function main () {
    const myLibrary = ["book1", "book2", "book3", "book4", "book5"];

    const dialog = document.querySelector("dialog");
    const newBookBtn = document.getElementById("newBookBtn");
    const closeNewBookBtn = document.getElementById("closeNewBookBtn");
    
    newBookBtn.addEventListener("click", () => {
        dialog.showModal();
    }, false);
    closeNewBookBtn.addEventListener("click", () => {
        dialog.close();
    }, false);

    function addBookToLibrary (book) {
        myLibrary.push(book);
    }

    function showLibrary () {
        for (let i = 0; i < myLibrary.length; i++) {
            console.log(myLibrary[i]);
        }
    }
}