document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-item");
  const itemDiv = document.getElementById("shopping-items");
  const ol = document.createElement("ol");

  itemDiv.appendChild(ol);
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardTitle = card.querySelector(".card-title").innerText;
      const cardPrice = card.querySelector(".item-price").innerText;

      //   console.log(`Title: ${cardTitle}, Price: ${cardPrice}`);

      const li = document.createElement("li");
      li.innerText = cardTitle;
      ol.appendChild(li);
      ol.classList.add("list-decimal");
      let totalPrice = Number(document.getElementById("total-price").innerText);
      totalPrice += Number(cardPrice);
      if (totalPrice >= 200) {
        const discount = totalPrice * 0.2;
        const totalAmount = totalPrice - discount;
        setValue("total-price", totalPrice.toFixed(2));
        setValue("discount", discount.toFixed(2));
        setValue("total-amount", totalAmount.toFixed(2));
      } else {
        setValue("total-price", totalPrice.toFixed(2));
        setValue("total-amount", totalPrice.toFixed(2));
      }
      //   console.log(itemDiv.innerHTML);
    });
  });
});

function setValue(id, value) {
  document.getElementById(id).innerText = value;
}
