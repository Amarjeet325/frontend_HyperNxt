export default function Cart({ open, onClose, items = [], onRemoveItem, onAddItem, mode = "drawer" }) {
  const total = items.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);

  if (mode === "dropdown") {
    return (
      <>
        {/* click-catcher to close when clicking outside */}
        {open && <div className="fixed inset-0 z-40" onClick={onClose} />}

        <div
          className={`absolute right-0 top-full mt-2 w-[320px] bg-white border rounded shadow-lg z-50 ${open ? "" : "hidden"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <h2 className="text-md font-semibold text-orange-400">Your cart</h2>
            <div className="flex items-center gap-3">
              <span className="bg-orange-400 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                {items.length}
              </span>
              <button onClick={onClose} className="text-lg">✕</button>
            </div>
          </div>

          {/* Items */}
          <div className="p-3 max-h-[300px] overflow-auto space-y-3">
            {items.length === 0 && (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            )}

            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2 items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Brief description</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold">${((item.price || 0) * (item.qty || 1)).toFixed(2)}</p>
                  <div className="text-xs text-gray-500">Qty: {item.qty || 1}</div>
                  <div className="flex gap-2">
                    <button onClick={() => onRemoveItem?.(item.id)} className="text-sm text-red-500">Remove</button>
                    <button onClick={() => onAddItem?.(item)} className="text-sm text-green-600">Add</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between pt-3 font-semibold text-lg">
              <span>Total (USD)</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="p-3">
            <button onClick={() => onAddItem?.()} className="w-full mb-2 bg-green-600 text-white py-2 rounded-lg text-sm">Add sample item</button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">Continue to checkout</button>
          </div>
        </div>
      </>
    );
  }

  // Drawer mode (original behavior)
  return (
    <>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-orange-400">Your cart</h2>

          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">{items.length}</span>
            <button onClick={onClose} className="text-xl">✕</button>
          </div>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-2 items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Brief description</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold">${item.price}</p>
                <div className="flex gap-2">
                  <button onClick={() => onRemoveItem?.(item.id)} className="text-sm text-red-500">Remove</button>
                  <button onClick={() => onAddItem?.(item)} className="text-sm text-green-600">Add</button>
                </div>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between pt-3 font-semibold text-lg">
            <span>Total (USD)</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Checkout */}
        <div className="p-4 mt-auto">
          <button onClick={() => onAddItem?.()} className="w-full mb-3 bg-green-600 text-white py-3 rounded-lg text-lg">Add sample item</button>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg">Continue to checkout</button>
        </div>
      </div>
    </>
  );
}
