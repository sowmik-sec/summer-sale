let totalPrice = 0;
let discount = 0;
let totalAmount = 0;
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
      totalPrice = Number(document.getElementById("total-price").innerText);
      totalPrice += Number(cardPrice);

      const coupon = document
        .getElementById("coupon")
        .addEventListener("keyup", (e) => {
          console.log(e.target.value);
          if (totalPrice >= 200 && e.target.value === "SELL200") {
            const whatIsIt = document
              .getElementById("apply")
              .removeAttribute("disabled");
          } else {
            document.getElementById("apply").setAttribute("disabled", true);
          }
        });

      // if (totalPrice >= 200) {
      // discount = totalPrice * 0.2;
      // totalAmount = totalPrice - discount;
      //   setValue("total-price", totalPrice.toFixed(2));
      //   setValue("discount", discount.toFixed(2));
      //   setValue("total-amount", totalAmount.toFixed(2));
      // }
      // else {
      setValue("total-price", totalPrice.toFixed(2));
      setValue("total-amount", totalPrice.toFixed(2));
      // }
      //   console.log(itemDiv.innerHTML);
    });
  });
});

function setValue(id, value) {
  document.getElementById(id).innerText = value;
}

function applyDiscount() {
  discount = totalPrice * 0.2;
  totalAmount = totalPrice - discount;
  setValue("total-price", totalPrice.toFixed(2));
  setValue("discount", discount.toFixed(2));
  setValue("total-amount", totalAmount.toFixed(2));
  document.getElementById("coupon").value = "";
}

document.getElementById("go-home").addEventListener("click", () => {
  setValue("total-price", 0);
  setValue("discount", 0);
  setValue("total-amount", 0);
});
