
const displayRandomRelatedProducts = () => {
    let relatedProductsContainer = document.getElementById("RelatedProducts");
    relatedProductsContainer.innerHTML = '';  
    let relatedProducts = products.filter(item => {
        return item.id === item.id;
    });
    relatedProducts = shuffleArray(relatedProducts);
    relatedProducts = relatedProducts.slice(0, 8);
    relatedProducts.forEach(item => {
        let productCard = document.createElement("div");
        productCard.onclick = () => { ProductView(item) }
        let badgeVisibility = (item.datanew || item.dataseller) ? '' : 'hidden-badge';
        productCard.classList.add("feature-card");
        productCard.innerHTML = `
            <div class="feature-card-img-container">
                <img src="${item.img}" alt="${item.name}" class="lazy-load">
                       <div class="feature-card-img-badge ${badgeVisibility}">
                ${(item.datanew ? 'New' : item.dataseller ? 'BestSeller' : '')}
            </div>
            </div>
            <div class="feature-card-content">
                <h3 class="feature-card-content-header-title">${item.name}</h3>
                <p class="feature-card-content-header-subtitle">$${item.price}</p>
                <button class="feature-card-button" onclick="addToCart(${item.id})">
                    <i class="fas fa-cart-shopping feature-card-button-icon"></i>
                    <span>Add To Cart</span>
                </button>
            </div>
        `;

        relatedProductsContainer.appendChild(productCard);
    });
};

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
    
};
displayRandomRelatedProducts()