// script.js
const products = [
    {
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$19.99",
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    },
    {
        name: "Product 2",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Product 3",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus who blanditiis.",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
];

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("div");
    productImage.classList.add("product-image");
    productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button class="buy-now-button">Buy Now</button>
    `;

    productCard.appendChild(productImage);
    productCard.appendChild(productDetails);

    return productCard;
}

const productContainer = document.querySelector(".product-container");

products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
});
