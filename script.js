window.addEventListener("DOMContentLoaded", main, false);

function main () {
    const myLibrary = [];
    myLibrary.push(new Book("The Way of Kings", "Brandom Sanderson", 1008, "true"));
    myLibrary.push(new Book("The Happiness Trap", "Russ Harris", 240, "false"));
    myLibrary.push(new Book("The Complete Wheel of Time", "Robert Jordan", 14277, "false"));
    myLibrary.push(new Book("Playful Intelligence", " Anthony T. DeBenedet", 264, "false"));


    const dialog = document.querySelector("dialog");
    const newBookBtn = document.getElementById("newBookBtn");
    const addBookBtn = document.getElementById("addBookBtn");
    const closeNewBookBtn = document.getElementById("closeNewBookBtn");
    const form = document.querySelector("form");
    const section = document.querySelector("section");

    function Book (title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
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
        showLibrary();
    }

    function showLibrary () {
        for (let i = 0; i < myLibrary.length; i++) {
            if (!document.getElementById(`bookBtn${myLibrary[i].id}`)) {
                console.log(myLibrary[i]);

                const article = document.createElement("article");
                const figure = document.createElement("figure");
                const img = document.createElement("img");
                const figcaption = document.createElement("figcaption");
                const span1 = document.createElement("span");
                const span2 = document.createElement("span");
                const button = document.createElement("button");
    
                img.setAttribute("alt",myLibrary[i].title);
                figcaption.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}`;
                figure.appendChild(img);
                figure.appendChild(figcaption);
                article.appendChild(figure);
    
                if (myLibrary[i].isRead == "true") {
                    span1.textContent = "Read:✔️"
                } else {
                    span1.textContent = "Read:❌"
                }
                span1.addEventListener("click", () => {
                    if (span1.textContent == "Read:❌") {
                        span1.textContent = "Read:✔️"
                    } else {
                        span1.textContent = "Read:❌"
                    }
                }, false);
                article.appendChild(span1);
    
                span2.textContent = `Pages: ${myLibrary[i].pages}`
                article.appendChild(span2);

                button.textContent = "Remove book";
                img.setAttribute("id", `bookBtn${myLibrary[i].id}`);
                button.addEventListener("click", () => {
                    section.removeChild(article);
                }, false)
                article.appendChild(button);
    
                section.appendChild(article);
            }
        }
        /*
            <article>
                <figure>
                    <img src="" alt="title">
                    <figcaption>title by author</figcaption>
                </figure>
                <span>Read: ✔️</span>
                <span>Pages: 221</span>
                <button>Remove book</button>
            </article>
        */
    }
}