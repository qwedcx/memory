import { images } from "./data.js";

images.sort( () => Math.random() - 0.5);

function myRandom(imgArray) {
    for (let i = imgArray.length - 1; i > 0; i--)
    return imgArray;
}

let visibleCards = [];

const container = document.querySelector(".container");
images.forEach( ( item ) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card"+item.id);
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = "img";
    card.append(img);
    container.append(card);
    card.addEventListener("click", ()=>{
        if (visibleCards.length < 2)
        {
            card.classList.add("card-show");
            visibleCards.push(item);
            if (visibleCards.length == 2)
            {
                setTimeout(() => {
                card.classList.remove("card-show");
                document.querySelector(".card"+visibleCards[0].id).classList.remove("card-show");
                visibleCards = [];
                },  3000);
            }
        }
    })
});



