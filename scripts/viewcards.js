let cards = JSON.parse(localStorage.getItem('cards'));
let template = document.querySelector("#card-template");
let cardlist = document.querySelector("#card-list");
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);
    let cardview = template.content.cloneNode(true);
    

    let titletext = cardview.querySelector(".title-text");
    titletext.textContent = card.title;
    cardview.querySelector(".subtitle-text").textContent = card.subtitle;
    cardview.querySelector(".to-text").textContent = card.to;
    cardview.querySelector(".message-text").textContent = card.message;
    cardview.querySelector(".from-text").textContent = card.from;

    let deletebtn = cardview.querySelector(".delete-btn");
    deletebtn.addEventListener("click", function() {
        console.log(i); //stores value at i at this point in the code
        cards.splice(i, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
        location.reload();
    });

    cardlist.appendChild(cardview);
}

