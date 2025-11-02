import { useAppState } from '../context/AppContext';

export const Cart = () => {
  const { state } = useAppState();

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
      <h2 className="text-2xl font-bold border-b pb-4 mb-4">Current Sale</h2>

      {/* Cart Items */}
      <div className="flex-grow overflow-y-auto">
        {state.cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {state.cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary */}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-bold text-xl">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {/* Payment button will go here later */}
      </div>
    </div>
  );
};
