// Sample product data
const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 999,
        image: 'laptop.jpg'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 799,
        image: 'smartphone.jpg'
    },
    {
        id: 3,
        name: 'Headphones',
        price: 199,
        image: 'headphones.jpg'
    },
    {
        id: 4,
        name: 'Camera',
        price: 599,
        image: 'camera.jpg'
    },
    {
        id: 5,
        name: 'Gaming Console',
        price: 399,
        image: 'console.jpg'
    },
    {
        id: 6,
        name: 'Smartwatch',
        price: 299,
        image: 'smartwatch.jpg'
    },
    {
        id: 7,
        name: 'Wireless Earbuds',
        price: 149,
        image: 'earbuds.jpg'
    },
    {
        id: 8,
        name: 'Tablet',
        price: 499,
        image: 'tablet.jpg'
    },
    {
        id: 9,
        name: 'Desktop Computer',
        price: 1299,
        image: 'desktop.jpg'
    },
    {
        id: 10,
        name: 'Printer',
        price: 199,
        image: 'printer.jpg'
    }
];

// Function to display products
function displayProducts() {
    const productContainer = document.querySelector('.products');
    let output = '';

    products.forEach(product => {
        output += `
        <div class="product">
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
        `;
    });

    productContainer.innerHTML = output;
}

// Function to add product to cart (sample function)
function addToCart(productId) {
    // Here you can add logic to add the selected product to the cart
    alert(`Product with ID ${productId} added to cart!`);
}

// Initial function call to display products
displayProducts();
