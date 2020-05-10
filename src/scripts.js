var cardDeck = document.querySelector("div");

var places = fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
  .then((res) => res.json())
  .then((data) => {
    for (const place of data) {
      let cardList = document.createElement("div");
      cardList.className = "card";

      // header
      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = `${place.photo}`;
      cardImg.alt = `${place.name}`;
      // endHeader

      // body
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = `${place.property_type}`;

      let cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.textContent = `${place.name}`;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      // endBody

      //footer
      let cardFooter = document.createElement("div");
      cardFooter.className = "card-footer";

      let cardFooterText = document.createElement("small");
      cardFooterText.className = "text-muted";
      cardFooterText.textContent = `R$ ${place.price},00`;

      cardFooter.appendChild(cardFooterText);
      // endFooter

      cardList.appendChild(cardImg);
      cardList.appendChild(cardBody);
      cardList.appendChild(cardFooter);

      cardDeck.appendChild(cardList);
    }
  });
