const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const list = document.querySelector(".book-list");

// switch first and last names of the authors in the books array
books.map((book) => {
  const writer = book.author.split(" ").reverse().join(", ");
  book.author = writer;
});

// sort the books array alphabetically by author
books.sort((a, b) => {
  if (a.author > b.author) { return 1 }
  else { return -1 };
});

// loop through books array and add them to the DOM
books.forEach((book) => {

  const li = document.createElement("li");
  li.classList.add("card", "mb-3", "mt-3");
  li.style.width = "14rem";
  list.appendChild(li);

  const img = document.createElement("img");
  img.src = book.img;
  img.style.height = "60%";
  img.style.objectFit = "cover";
  img.classList.add("card-img-top");
  li.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  li.appendChild(cardBody);

  const title = document.createElement("h5");
  title.innerText = book.title;
  title.classList.add("card-title");
  cardBody.appendChild(title);

  const author = document.createElement("p");
  author.innerText = book.author;
  author.classList.add("card-text");
  cardBody.appendChild(author);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-muted");
  li.appendChild(cardFooter);

  const pill = document.createElement("span");
  pill.classList.add("badge", "badge-pill", (book.alreadyRead ? "badge-success" : "badge-secondary"))
  pill.innerText = book.alreadyRead ? "Read" : "To read";
  pill.style.fontStyle = "italic";
  pill.style.float = "right";
  cardFooter.appendChild(pill);

})
