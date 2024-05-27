document.addEventListener("DOMContentLoaded", () => {
    const products = {
        iphones: [
            { name: "iPhone 13", price: "R$ 7.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone 13 Pro", price: "R$ 9.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone 12", price: "R$ 5.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone 12 Pro", price: "R$ 7.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone 11", price: "R$ 4.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone 11 Pro", price: "R$ 6.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone XS", price: "R$ 3.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone XR", price: "R$ 3.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone X", price: "R$ 2.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "iPhone SE", price: "R$ 1.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" }
        ],
        xiaomis: [
            { name: "Xiaomi Mi 11", price: "R$ 4.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi 11 Ultra", price: "R$ 5.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi 10", price: "R$ 3.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi 10 Pro", price: "R$ 4.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi 9", price: "R$ 2.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi 9 SE", price: "R$ 2.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Redmi Note 10", price: "R$ 1.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Redmi Note 9", price: "R$ 1.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Redmi Note 8", price: "R$ 1.200", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Redmi Note 7", price: "R$ 1.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi Mix 3", price: "R$ 3.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Mi Mix 2S", price: "R$ 2.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Poco F2", price: "R$ 2.200", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Poco F1", price: "R$ 1.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Xiaomi Black Shark 2", price: "R$ 3.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" }
        ],
        outros: [
            { name: "Samsung Galaxy S21", price: "R$ 4.000", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Samsung Galaxy S21 Ultra", price: "R$ 5.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Samsung Galaxy S20", price: "R$ 3.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Samsung Galaxy Note 20", price: "R$ 4.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "OnePlus 9", price: "R$ 3.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "OnePlus 9 Pro", price: "R$ 4.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Google Pixel 5", price: "R$ 3.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "OnePlus 9 Pro", price: "R$ 4.800", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Google Pixel 5", price: "R$ 3.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" },
            { name: "Google Pixel 4a", price: "R$ 2.500", image: "https://via.placeholder.com/200", link: "https://wa.me/5511999999999" }
        ]
    };

    function createProductHTML(product) {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a class="buy-button" href="${product.link}" target="_blank">Comprar via WhatsApp</a>
            </div>
        `;
    }

    const iphoneContainer = document.querySelector("#iphones .product-grid");
    const xiaomiContainer = document.querySelector("#xiaomis .product-grid");
    const outrosContainer = document.querySelector("#outros .product-grid");

    products.iphones.forEach(product => {
        iphoneContainer.innerHTML += createProductHTML(product);
    });

    products.xiaomis.forEach(product => {
        xiaomiContainer.innerHTML += createProductHTML(product);
    });

    products.outros.forEach(product => {
        outrosContainer.innerHTML += createProductHTML(product);
    });





});
