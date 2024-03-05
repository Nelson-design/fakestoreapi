const url = 'https://fakestoreapi.com/products';
let container = document.getElementById('container');
let rootDiv = document.getElementById('root');

async function getProducts() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  //   console.log(`Euro: ${euro.format(price)}`);

  let rootContent = data
    .map(item => {
      return `<div class="container">
    <div class="img-container">
        <img src=${item.image} alt=${item.description} id="img"/>
    </div>
    <p class="title">${item.title.substr(0, 25)}</p>
    <p class="price">${item.price}</p>
</div>`;
    })
    .join('');

  rootDiv.innerHTML = rootContent;
}
getProducts();
