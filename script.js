const addToCart = document.getElementById("cart");
const notifContainer = document.getElementById("notif-container");

addToCart.addEventListener('click', () => {
    createNotification();
});

function createNotification () {
    const notif = document.createElement('div');
    notif.classList.add("toast");
    notif.innerText = 'Shoes added to cart';
    
    notifContainer.appendChild(notif);

    setTimeout( () => {
        notif.remove();
    }, 1500);
}