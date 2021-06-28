let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// FETCHIN THE TOYS
document.addEventListener('DOMContentLoad', fetchToys());

  function fetchToys(){
    fetch('http://localhost:3000/toys') 
 .then(response => response.json())
 .then(json => toyCards(json))
  }

//adding some layout stuff i guess

function toyCards(json){
  let toyCollection = document.getElementById("toy-collection")

  json.forEach(element => {
    let cardDiv = document.createElement("div")
    cardDiv.className = "card"

    let h2 = document.createElement("h2")
    h2.innerHTML = element.name

    let img = document.createElement("img")
    img.src = element.img
    img.className = "toy-avatar"

    let p = document.createElement("p")
    p.innerText = `${element.likes} Likes`

    let likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    button.innerText = "Like"

    cardDiv.append(h2,img,p,likeButton)
    toyCollection.appendChild(cardDiv)
  })

}


// POST REQUEST TO ADD NEW
function addNewToys(name, image, likes) {

  let configobj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,   
      image,
      likes
    })
  }
  fetch("http://localhost:3000/toys", configObj)
  .then(response => response.json())
  .then(json => console.log(json))
}

//Like toys

  function addLikes(clickEvent){
  
    let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": parseInt(toy.likes) + 1
    })
    }

    fetch("http://localhost:3000/toys/${toy.id}", configObj)
  }