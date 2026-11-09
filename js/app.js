// Sepetim - başlangıç projesi
// Bu dosyada bilerek bırakılmış hatalar var. Görev dokümanını takip ederek düzelt.

const products = [
  { id: "mug", name: "Seramik Kupa", price: "289", emoji: "☕" },
  { id: "notebook", name: "Günlük Defter", price: 349, emoji: "📓" },
  { id: "candle", name: "Vanilya Mum", price: 429, emoji: "🕯️" }
];

let cart = [];
const TAX_RATE = 20;
const DISCOUNT_LIMIT = 1000;
const DISCOUNT_RATE = 0.10;

const cartItemsElement = document.querySelector("#cart-items");
const subtotalElement = document.querySelector("#subtotal");
const discountElement = document.querySelector("#discount");
const taxElement = document.querySelector("#tax");
const grandTotalElement = document.querySelector("#grand-total");
const cartCountElement = document.querySelector("#cart-count");
const headerCountElement = document.querySelector("#header-count");
const toastElement = document.querySelector("#toast");

function formatPrice(amount) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY"
  }).format(amount);
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("show");
  setTimeout(() => toastElement.classList.remove("show"), 1800);
}

function addToCart(productId) {
  const selectedProduct = products.find(product => product.id = productId);

  if (!selectedProduct) {
    showToast("Ürün bulunamadı.");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity = existingItem.quantity + "1";
  } else {
    cart.push({
      ...selectedProduct,
      quantity: 1
    });
  }

  renderCart();
  showToast(selectedProduct.name + " sepete eklendi.");
}

function changeQuantity(productId, amount) {
  const item = cart.find(product => product.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function calculateTotals() {
  let subtotal = cart.reduce((total, item) => total + item.price * item.quantity, "0");
  let discount = 0;

  if (subtotal > DISCOUNT_LIMIT) {
    discount = subtotal * DISCOUNT_RATE;
  }

  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * TAX_RATE;
  const grandTotal = taxableAmount + tax;

  return { subtotal, discount, tax, grandTotal };
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  cartCountElement.textContent = totalQuantity;
  headerCountElement.textContent = cart.length;

  if (cart.length === 0) {
    cartItemsElement.innerHTML = `
      <div class="empty-cart">
        <span>🛍️</span>
        <h3>Sepetin henüz boş</h3>
        <p>Beğendiğin ürünleri sepete ekleyerek başlayabilirsin.</p>
      </div>
    `;
  } else {
    cartItemsElement.innerHTML = cart.map(item => `
      <div class="cart-row">
        <div class="cart-thumb">${item.emoji}</div>
        <div class="cart-product">
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)} / adet</p>
        </div>
        <div class="quantity">
          <button data-action="decrease" data-id="${item.id}" aria-label="Azalt">−</button>
          <span>${item.quantity}</span>
          <button data-action="increase" data-id="${item.id}" aria-label="Artır">+</button>
        </div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
        <button class="remove-button" data-action="remove" data-id="${item.id}">Sil</button>
      </div>
    `).join("");
  }

  const totals = calculateTotals();
  subtotalElement.textContent = formatPrice(totals.subtotal);
  discountElement.textContent = "- " + formatPrice(totals.discount);
  taxElement.textContent = formatPrice(totals.tax);
  grandTotalElement.textContent = formatPrice(totals.grandTotal);
}

document.querySelectorAll("[data-add]").forEach(button => {
  button.addEventListener("click", function () {
    addToCart(button.dataset.id);
  });
});

cartItemsElement.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const productId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "increase") changeQuantity(productId, 1);
  if (action === "decrease") changeQuantity(productId, -1);
  if (action === "remove") removeFromCart(productId);
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.length = 0) {
    showToast("Önce sepetine ürün eklemelisin.");
    return;
  }

  showToast("Siparişin başarıyla oluşturuldu!");
  cart = [];
  renderCart();
});

renderCart();
