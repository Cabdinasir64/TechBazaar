let Products = [
    {
        id: 1, name: 'Charger 1', price: 39.99, img: 'src/assets/Chargers 1.jpeg', colors: ['black', 'red', 'blue'],
        description: 'Our chargers are designed to provide fast and efficient charging for all your devices. With advanced safety features, they protect your devices from overcharging and overheating. Perfect for home, office, or travel, these chargers are compact, durable, and reliable.'

    },

    {
        id: 2, name: 'Charger 2', price: 29.99, img: 'src/assets/Chargers 2.jpeg', colors: ['black', 'red', 'blue'],
        description: 'Our chargers are designed to provide fast and efficient charging for all your devices. With advanced safety features, they protect your devices from overcharging and overheating. Perfect for home, office, or travel, these chargers are compact, durable, and reliable.'
    },
    {
        id: 3, name: 'Charger 3', price: 19.99, img: 'src/assets/Chargers 3.jpeg', colors: ['black', 'red', 'blue'],
        description: 'Our chargers are designed to provide fast and efficient charging for all your devices. With advanced safety features, they protect your devices from overcharging and overheating. Perfect for home, office, or travel, these chargers are compact, durable, and reliable.'
    },
    {
        id: 4, name: 'Cooling Pad 1', price: 49.99, img: 'src/assets/Cooling Pads 1.jpeg', datanew: 'new',
        colors: ['black', 'navyblue', 'blue'], description: 'Keep your laptop cool and running smoothly with our high-performance cooling pads. Designed with powerful fans and ergonomic features, they provide optimal airflow to prevent overheating. Lightweight and portable, these cooling pads are ideal for both work and gaming.'
    },
    {
        id: 5, name: 'Cooling Pad 2', price: 34.99, img: 'src/assets/Cooling Pads 2.jpeg',
        colors: ['black', 'navyblue', 'blue'], description: 'Keep your laptop cool and running smoothly with our high-performance cooling pads. Designed with powerful fans and ergonomic features, they provide optimal airflow to prevent overheating. Lightweight and portable, these cooling pads are ideal for both work and gaming.'
    },
    { id: 6, name: 'Docking Stand 1.jpeg', price: 79.99, img: 'src/assets/Docking Stand 1.jpeg', colors: ['black', 'navyblue', 'blue'], description: 'Keep your laptop cool and running smoothly with our high-performance cooling pads. Designed with powerful fans and ergonomic features, they provide optimal airflow to prevent overheating. Lightweight and portable, these cooling pads are ideal for both work and gaming.' },
    {
        id: 7, name: 'Headphone 1', price: 29.99, img: 'src/assets/Headphones 1.jpeg',
        colors: ['lime', 'black'], decription: 'Experience superior sound quality with our range of headphones. Designed for comfort and durability, they feature noise-cancelling technology and soft ear cushions for immersive listening. Perfect for music, gaming, or calls, these headphones deliver exceptional audio performance.'
    },
    { id: 8, name: 'Headphone 2', price: 19.99, img: 'src/assets/Headphones 2.jpeg', datanew: 'new', colors: ['lime', 'black'], decription: 'Experience superior sound quality with our range of headphones. Designed for comfort and durability, they feature noise-cancelling technology and soft ear cushions for immersive listening. Perfect for music, gaming, or calls, these headphones deliver exceptional audio performance.' },
    { id: 9, name: 'Headphone 3', price: 39.99, img: 'src/assets/Headphones 3.jpeg', dataseller: 'seller', colors: ['lime', 'black'], decription: 'Experience superior sound quality with our range of headphones. Designed for comfort and durability, they feature noise-cancelling technology and soft ear cushions for immersive listening. Perfect for music, gaming, or calls, these headphones deliver exceptional audio performance.' },
    { id: 10, name: 'Headphone 4', price: 79.99, img: 'src/assets/Headphones 5.jpeg', colors: ['lime', 'black'], decription: 'Experience superior sound quality with our range of headphones. Designed for comfort and durability, they feature noise-cancelling technology and soft ear cushions for immersive listening. Perfect for music, gaming, or calls, these headphones deliver exceptional audio performance.' },
    { id: 11, name: 'Headphone 5', price: 19.99, img: 'src/assets/Headphones 6.jpeg', colors: ['lime', 'black'], decription: 'Experience superior sound quality with our range of headphones. Designed for comfort and durability, they feature noise-cancelling technology and soft ear cushions for immersive listening. Perfect for music, gaming, or calls, these headphones deliver exceptional audio performance.' },
    { id: 12, name: 'HP laptop 1', price: 199.99, img: 'src/assets/Hp Laptop 2.jpeg', colors: ['white', 'black'], description: 'Our laptops combine power, performance, and portability for all your computing needs. Featuring high-resolution displays, fast processors, and long battery life, they are perfect for work, study, or entertainment. Designed with sleek and modern aesthetics, our laptops are both functional and stylish.' },
    { id: 13, name: 'HP laptop 2', price: 499.99, img: 'src/assets/Hp Laptop.jpeg', dataseller: 'seller', colors: ['white', 'black'], description: 'Our laptops combine power, performance, and portability for all your computing needs. Featuring high-resolution displays, fast processors, and long battery life, they are perfect for work, study, or entertainment. Designed with sleek and modern aesthetics, our laptops are both functional and stylish.' },
    { id: 14, name: 'Ipad Air', price: 499.99, img: 'src/assets/Ipad Air.jpeg', colors: ['white', 'black'], description: 'Our laptops combine power, performance, and portability for all your computing needs. Featuring high-resolution displays, fast processors, and long battery life, they are perfect for work, study, or entertainment. Designed with sleek and modern aesthetics, our laptops are both functional and stylish.' },
    { id: 15, name: 'Ipad Pro', price: 1199.99, img: 'src/assets/Ipad Pro.jpeg', dataseller: 'seller', colors: ['white', 'black'], description: 'Our laptops combine power, performance, and portability for all your computing needs. Featuring high-resolution displays, fast processors, and long battery life, they are perfect for work, study, or entertainment. Designed with sleek and modern aesthetics, our laptops are both functional and stylish.' },
    { id: 16, name: 'Iphone 8 Plus', price: 399.99, img: 'src/assets/Iphone 8 Plus.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 17, name: 'Iphone 8', price: 199.99, img: 'src/assets/Iphone 8.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 18, name: 'Iphone 11 Pro Max', price: 499.99, img: 'src/assets/Iphone 11 Pro Max.jpeg', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 19, name: 'Iphone 11 Pro ', price: 439.99, img: 'src/assets/Iphone 11 Pro.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 20, name: 'Iphone 11 ', price: 369.99, img: 'src/assets/Iphone 11.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 21, name: 'Iphone 12 Pro Max ', price: 549.99, img: 'src/assets/Iphone 12 Pro Max.jpeg', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 22, name: 'Iphone 12 Pro', price: 499.99, img: 'src/assets/Iphone 12 Pro.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 23, name: 'Iphone 12 ', price: 419.99, img: 'src/assets/Iphone 12.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 24, name: 'Iphone 13 Pro Max ', price: 599.99, img: 'src/assets/Iphone 13 Pro Max.jpeg', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 25, name: 'Iphone 13 ', price: 499.99, img: 'src/assets/Iphone 13.png', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 26, name: 'Iphone 14 Pro Max', price: 599.99, img: 'src/assets/Iphone 14 Pro Max.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 27, name: 'Iphone 14 Pro ', price: 499.99, img: 'src/assets/Iphone 14 Pro.jpeg', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 28, name: 'Iphone 14 ', price: 419.99, img: 'src/assets/Iphone 14.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 29, name: 'Iphone 15 Pro Max', price: 699.99, img: 'src/assets/Iphone 15 Pro Max.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 30, name: 'Iphone 15 Pro ', price: 639.99, img: 'src/assets/Iphone 15 Pro.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 31, name: 'Iphone 15 ', price: 569.99, img: 'src/assets/Iphone 15.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 32, name: 'Iphone 16 Pro Max', price: 799.99, img: 'src/assets/Iphone 16 Pro Max.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 33, name: 'Iphone 16 Pro ', price: 649.99, img: 'src/assets/Iphone 16 Pro.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 34, name: 'Iphone 16 ', price: 619.99, img: 'src/assets/Iphone 16.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 35, name: 'Iphone X Max ', price: 399.99, img: 'src/assets/Iphone X Max.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 36, name: 'Iphone Xs Max ', price: 429.99, img: 'src/assets/Iphone Xs Max.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 37, name: 'Iphone Xs', price: 229.99, img: 'src/assets/Iphone Xs.jpeg', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 38, name: 'Keyboard 1', price: 49.99, img: 'src/assets/Keyboards 1.jpeg', description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 39, name: 'Keyboard 2', price: 29.99, img: 'src/assets/Keybaord 2.jpeg', description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 40, name: 'Keyboard 3', price: 129.99, img: 'src/assets/Keyboard 3.jpeg', description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 41, name: 'Keyboard 4', price: 79.99, img: 'src/assets/Keybaord 4.jpeg', description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 42, name: 'Macbook Air', price: 999.99, img: 'src/assets/Mackbook Laptop.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 43, name: 'Macbook Pro', price: 1299.99, img: 'src/assets/Mackbook Pro.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 44, name: 'Phone Case 1', price: 19.99, img: 'src/assets/Phone Cover.jpeg', colors: ['yellow', 'green', 'black', 'white'], description: 'Protect your smartphone in style with our range of phone cases. Made from durable materials, they offer excellent protection against drops, scratches, and daily wear. Available in a variety of colors and designs, our phone cases combine functionality with fashion.' },
    { id: 45, name: 'Phone Case 2', price: 29.99, img: 'src/assets/Phone Cover.png', colors: ['yellow', 'green', 'black', 'white'], description: 'Protect your smartphone in style with our range of phone cases. Made from durable materials, they offer excellent protection against drops, scratches, and daily wear. Available in a variety of colors and designs, our phone cases combine functionality with fashion.' },
    { id: 46, name: 'Redmi Note 12', price: 129.99, img: 'src/assets/Redmi Note 12.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 47, name: 'Samsung Galaxy A10', price: 129.99, img: 'src/assets/Samsung A10.avif', dataseller: 'seller', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 48, name: 'Samsung Galaxy A10s', price: 149.99, img: 'src/assets/Samsung A10s.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 49, name: 'Samsung Galaxy A12s', price: 169.99, img: 'src/assets/Samsung A12.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 50, name: 'Samsung Galaxy A21', price: 179.99, img: 'src/assets/Samsung A21.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 51, name: 'Samsung Galaxy A30', price: 229.99, img: 'src/assets/Samsung A30.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 52, name: 'Samsung Galaxy A50', price: 279.99, img: 'src/assets/Samsung A50s.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 53, name: 'Samsung Galaxy A50s', price: 299.99, img: 'src/assets/Samsung A50s.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 54, name: 'Samsung Galaxy A70', price: 349.99, img: 'src/assets/Samsung A70.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 55, name: 'Samsung Galaxy A70s', price: 399.99, img: 'src/assets/Samsung A70s.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 56, name: 'Samsung Galaxy S20', price: 499.99, img: 'src/assets/Samsung S20.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 57, name: 'Samsung Galaxy S21', price: 549.99, img: 'src/assets/Samsung S21.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 58, name: 'Samsung Galaxy S23', price: 699.99, img: 'src/assets/Samsung S23 Ultra.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 59, name: 'Samsung Galaxy S23 Ultra', price: 649.99, img: 'src/assets/Samsung S23.jpeg', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 60, name: 'Samsung Galaxy S25 Ultra', price: 1199.99, img: 'src/assets/Samsung S25 Ultra.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 61, name: 'Samsung Galaxy S25', price: 969.99, img: 'src/assets/Samsung S25.jpeg', datanew: 'new', colors: ['black', 'darkblue', 'white'], description: 'Enhance your typing experience with our ergonomic and high-performance keyboards. Designed for comfort and efficiency, they feature responsive keys and durable builds. Perfect for work, gaming, or everyday use, our keyboards offer a smooth and reliable typing experience.' },
    { id: 62, name: 'USB 1', price: 29.99, img: 'src/assets/USB 1.jpeg', colors: ['black', 'white'], description: 'Store and transfer your data effortlessly with our reliable USB drives. Featuring high storage capacities and fast transfer speeds, they are perfect for work, school, or personal use. Compact and portable, our USB drives are designed for convenience and durability.' },
    { id: 63, name: 'USB 2', price: 19.99, img: 'src/assets/USB 2.jpeg', colors: ['black', 'white'], description: 'Store and transfer your data effortlessly with our reliable USB drives. Featuring high storage capacities and fast transfer speeds, they are perfect for work, school, or personal use. Compact and portable, our USB drives are designed for convenience and durability.' },
    { id: 64, name: 'USB 3', price: 49.99, img: 'src/assets/USB 3.png', colors: ['black', 'white'], description: 'Store and transfer your data effortlessly with our reliable USB drives. Featuring high storage capacities and fast transfer speeds, they are perfect for work, school, or personal use. Compact and portable, our USB drives are designed for convenience and durability.' },
    { id: 65, name: 'USB 4', price: 14.99, img: 'src/assets/USB 4.jpeg', colors: ['black', 'white'], description: 'Store and transfer your data effortlessly with our reliable USB drives. Featuring high storage capacities and fast transfer speeds, they are perfect for work, school, or personal use. Compact and portable, our USB drives are designed for convenience and durability.' },
    { id: 66, name: 'WebCam 1', price: 99.99, img: 'src/assets/WebCam 1.jpeg', description: 'Upgrade your video calls and streaming with our high-quality webcams. Featuring HD resolution, auto-focus, and noise-cancelling microphones, they deliver clear video and audio for professional and personal use. Perfect for remote work, online classes, or virtual meetings.' },
    { id: 67, name: 'WebCam 2', price: 499.99, img: 'src/assets/WebCam 2.jpeg', description: 'Upgrade your video calls and streaming with our high-quality webcams. Featuring HD resolution, auto-focus, and noise-cancelling microphones, they deliver clear video and audio for professional and personal use. Perfect for remote work, online classes, or virtual meetings.' },
    { id: 68, name: 'WebCam 3', price: 199.99, img: 'src/assets/WebCam 3.jpeg', description: 'Upgrade your video calls and streaming with our high-quality webcams. Featuring HD resolution, auto-focus, and noise-cancelling microphones, they deliver clear video and audio for professional and personal use. Perfect for remote work, online classes, or virtual meetings.' },
    { id: 69, name: 'WebCam 4', price: 329.99, img: 'src/assets/WebCam 4.jpeg', description: 'Upgrade your video calls and streaming with our high-quality webcams. Featuring HD resolution, auto-focus, and noise-cancelling microphones, they deliver clear video and audio for professional and personal use. Perfect for remote work, online classes, or virtual meetings.' },
    { id: 70, name: 'WebCam 5', price: 599.99, img: 'src/assets/WebCam 5.jpeg', description: 'Upgrade your video calls and streaming with our high-quality webcams. Featuring HD resolution, auto-focus, and noise-cancelling microphones, they deliver clear video and audio for professional and personal use. Perfect for remote work, online classes, or virtual meetings.' },
]


const itemsPerPage = 12;
let currentPage = 1;
let filteredProducts = [...Products];

const renderItems = () => {

    let ShopProduct = document.getElementById("ShopProduct")
    ShopProduct.innerHTML = ''
    let Start = (currentPage - 1) * itemsPerPage
    let End = Start + itemsPerPage
    let paginatedItems = filteredProducts.slice(Start, End)

    paginatedItems.forEach(item => {
        let ProductCard = document.createElement('div');
        ProductCard.classList.add("Feature-card")
        let badgeVisibility = (item.datanew || item.dataseller) ? '' : 'hidden-badge';
        ProductCard.onclick = () => {productView(item)}
        ProductCard.innerHTML = `
         <div class="feature-card">
                    <!-- Image Container -->
                    <div class="feature-card-img-container">
                        <img src="${item.img}"  class="" loading="lazy">
                        <!-- Badge -->
                       <div class="feature-card-img-badge ${badgeVisibility}">
                ${(item.datanew ? 'New' : item.dataseller ? 'BestSeller' : '')}
            </div>
                    </div>
                    <!-- Content -->
                    <div class="feature-card-content">
                        <div class="feature-card-content-header">
                            <h3 class="feature-card-content-header-title">${item.name}</h3>
                            <p class="feature-card-content-header-subtitle">$${item.price}</p>
                        </div>
                        <button
                            class="feature-card-button" onclick={AddToCart(${item.id})}>
                            <i class="fas fa-cart-shopping feature-card-button-icon"></i>
                            <span>Add To Cart</span>
                        </button>
                    </div>
                </div>
        `
        ShopProduct.appendChild(ProductCard)
        renderPagination()
    })
}

const renderPagination = () => {
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    let totalPages = Math.ceil(Products.length / itemsPerPage);

    // Previous Button
    const prevButton = document.createElement("button");
    prevButton.innerHTML = `<i class="fa fa-chevron-left"></i>`;
    prevButton.className = "button";
    prevButton.hidden = (currentPage === 1);

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderItems();
            renderPagination();
        }
    };
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = "pageButton";

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.onclick = () => {
            currentPage = i;
            document.querySelectorAll(".pageButton").forEach(button => {
                button.classList.remove("active");
            });
            pageButton.classList.add("active");
            renderItems();
            renderPagination();
        };
        pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.innerHTML = `<i class="fa fa-chevron-right"></i>`;
    nextButton.className = "button";
    nextButton.hidden = (currentPage === totalPages);

    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderItems();
            renderPagination();
        }
    };

    pagination.appendChild(nextButton);
};
const applyFilter = (filterType) => {
    if (filterType === "all") {
        filteredProducts = [...Products];
    }
    else if (filterType === "newest") {
        filteredProducts = Products.filter(p => p.datanew)
    } else if (filterType === "price-low") {
        filteredProducts = Products.sort((a, b) => a.price - b.price);
    } else if (filterType === "price-high") {
        filteredProducts = Products.sort((a, b) => b.price - a.price);
    }
    currentPage = 1;
    renderItems();
};
document.addEventListener("DOMContentLoaded", () => {
    renderItems();
    document.querySelectorAll(".filter-option").forEach(option => {
        option.addEventListener("click", function () {
            document.querySelectorAll(".filter-option").forEach(p => p.classList.remove("active"))
            let filterType = this.getAttribute("data-sort");
            applyFilter(filterType);
            option.classList.add("active")
        });
    });
});

const productView = (Item) => {
    if (!Array.isArray(Item)) {
        Item = [Item];
    }
    localStorage.setItem("Item", JSON.stringify(Item));
    window.location.href = "product-overview.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let img = document.getElementById("img");
    let colors = document.getElementById("color");
    let button = document.getElementById("buttons");
    let bgImg = document.getElementById("bgImg");
    

    let storedItem = localStorage.getItem("Item");
    let ItemOverView = storedItem ? JSON.parse(storedItem) : [];

    ItemOverView.forEach(item => {
        name.innerHTML = item.name;
        description.innerHTML = item.description;
        price.innerHTML = `$${item.price}`; 
        img.setAttribute("alt", item.name);
        img.src = item.img;

        let Colors = item.colors;
        Colors.forEach(color => {
            let div = document.createElement("div");
            div.className = `w-10 h-10 shadow-lg rounded-full`;
            div.style.backgroundColor = color;
            div.addEventListener("click", () => {
                bgImg.style.backgroundColor = color  
            })
            colors.appendChild(div);
        });

        let Addtocart = document.createElement("button");
        Addtocart.onclick = () => { AddToCart(item.id) };
        Addtocart.className = "feature-card-button";
        Addtocart.innerHTML = ` 
            <i class="fas fa-cart-shopping feature-card-button-icon"></i>
            <span>Add To Cart</span>
        `;
        button.appendChild(Addtocart);  
    });
});