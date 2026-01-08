let total = 0;
let items = [];

function addItem(name, price) {
  total += price;
  items.push(name);
  document.getElementById("total").innerText = total.toLocaleString();
  document.getElementById("list").innerText = items.join(", ");
}

function goPay() {
  const nama = document.getElementById("nama").value;
  const meja = document.getElementById("meja").value;

  if (!nama || !meja || items.length === 0) {
    alert("Lengkapi data & pilih menu");
    return;
  }

  localStorage.setItem("nama", nama);
  localStorage.setItem("meja", meja);
  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("total", total);

  window.location.href = "payment.html";
}

