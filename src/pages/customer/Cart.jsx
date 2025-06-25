import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Your Shopping Cart</h1>
        <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4" style={{ color: '#F3F4F6' }}>🛒</div>
          <h3 className="text-xl font-medium mb-2" style={{ color: '#111827' }}>Your cart is empty</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>Browse our collection to find something you like</p>
          <button 
            className="px-6 py-3 rounded-md font-medium"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white'
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 text-sm uppercase tracking-wider" style={{ color: '#6B7280' }}>
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4">
                    <div className="grid grid-cols-12 items-center gap-4">
                      <div className="col-span-5 flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
                          <img 
                            src={item.image || '/placeholder-product.jpg'} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium" style={{ color: '#111827' }}>{item.title}</h3>
                          <p className="text-sm" style={{ color: '#6B7280' }}>{item.category}</p>
                        </div>
                      </div>

                      <div className="col-span-2 text-center" style={{ color: '#111827' }}>
                        ${item.price.toFixed(2)}
                      </div>

                      <div className="col-span-3 flex justify-center">
                        <div className="flex items-center border rounded-md" style={{ borderColor: '#E5E7EB' }}>
                          <button 
                            className="px-3 py-1 text-lg"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            style={{ 
                              color: item.quantity <= 1 ? '#D1D5DB' : '#4F46E5',
                              cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer'
                            }}
                          >
                            -
                          </button>
                          <span className="px-3 py-1" style={{ color: '#111827' }}>{item.quantity}</span>
                          <button 
                            className="px-3 py-1 text-lg"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{ color: '#4F46E5' }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center justify-end space-x-4">
                        <span className="font-medium" style={{ color: '#111827' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mt-6">
              <button 
                className="px-4 py-2 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#F3F4F6',
                  color: '#111827'
                }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button 
                className="px-4 py-2 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#F3F4F6',
                  color: '#111827'
                }}
              >
                Continue Shopping
              </button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-lg font-bold mb-4" style={{ color: '#111827' }}>Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span style={{ color: '#6B7280' }}>Subtotal</span>
                  <span style={{ color: '#111827' }}>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#6B7280' }}>Shipping</span>
                  <span style={{ color: '#111827' }}>Free</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#6B7280' }}>Tax</span>
                  <span style={{ color: '#111827' }}>$0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                  <span style={{ color: '#111827' }}>Total</span>
                  <span style={{ color: '#4F46E5' }}>${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                className="w-full py-3 rounded-md font-medium"
                style={{ 
                  backgroundColor: '#4F46E5',
                  color: 'white'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;