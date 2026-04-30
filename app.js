function addToCart(name, price) {
  console.log('Added to cart:', name, '$' + price);
  alert('Added to bag: ' + name);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.lumiere-store.example.com/cart', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log('Cart update response:', xhr.status);
    }
  };
  xhr.send(JSON.stringify({ item: name, price: price }));
}

function handleSearch() {
  alert('Search coming soon!');
}

function handleAccount() {
  alert('Account page coming soon!');
}

function handleCart() {
  alert('Your bag is empty.');
}

function handleShopNow() {
  alert('Redirecting to Summer Edit…');
}

function handleSubscribe(e) {
  e.preventDefault();

  var email = document.getElementById('newsletter-email').value;
  console.log('Newsletter subscription:', email);
  alert('Thank you for subscribing, ' + email + '!');
}