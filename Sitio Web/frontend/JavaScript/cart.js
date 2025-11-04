// Función para agregar productos al carrito (debe estar en menu.js)
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('ensaladazo_cart') || '[]');
    
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('ensaladazo_cart', JSON.stringify(cart));
    
    // Mostrar notificación
    showCartNotification('Producto agregado al carrito');
    
    // Actualizar contador
    updateCartCounter();
}

// Actualizar contador del carrito
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('ensaladazo_cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Mostrar notificación de carrito
function showCartNotification(message) {
    // Implementar notificación similar a la del carrito
    console.log(message); // Puedes implementar tu sistema de notificaciones
}

// Llamar esta función cuando la página cargue para actualizar el contador
document.addEventListener('DOMContentLoaded', updateCartCounter);