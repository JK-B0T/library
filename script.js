window.addEventListener("DOMContentLoaded", main, false);

function main () {
    const myLibrary = [];
    myLibrary.push(new Book("pop", "popo", 10, "true"));
    myLibrary.push(new Book("pip", "pipi", 32, "false"));
    myLibrary.push(new Book("pep", "pepe", 40, "true"));
    myLibrary.push(new Book("pap", "papa", 52, "false"));

    const dialog = document.querySelector("dialog");
    const newBookBtn = document.getElementById("newBookBtn");
    const addBookBtn = document.getElementById("addBookBtn");
    const closeNewBookBtn = document.getElementById("closeNewBookBtn");
    const form = document.querySelector("form");

    function Book (title, autor, pages, isread) {
        this.title = title;
        this.autor = autor;
        this.pages = pages;
        this.isread = isread;
        this.id = myLibrary.length;
    }

    newBookBtn.addEventListener("click", () => {
        dialog.showModal();
    }, false);
    closeNewBookBtn.addEventListener("click", () => {
        dialog.close();
    }, false);

    form.addEventListener("submit", addBookToLibrary, false);

    function processForm() {
        const formData = Object.fromEntries(new FormData(form).entries());
        return formData;
    }
   
    function addBookToLibrary (event) {
        event.preventDefault();

        const formData = processForm();
        const newBook = new Book(formData.title, formData.author, formData.pages_number, formData.is_read);
        myLibrary.push(newBook);
        console.log(myLibrary);

        form.reset();
        dialog.close();
    }

    function showLibrary () {
        for (let i = 0; i < myLibrary.length; i++) {
            console.log(myLibrary[i]);
        }

        /*
            <article>
                <figure>
                    <img src="" alt="title">
                    <figcaption>title by author</figcaption>
                </figure>
                <span>Read: ✔️</span>
                <span>Pages: 221</span>
            </article>
        */
    }
}