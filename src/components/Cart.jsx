export default function Cart({
  open,
  onClose,
  items = [],
  onRemoveItem,
  onAddItem,
  mode = "drawer",
}) {
  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  /* =========================
     DROPDOWN MODE (Desktop)
  ========================== */
  if (mode === "dropdown") {
    return (
      <>
        {/* Click-catcher */}
        {open && <div className="fixed inset-0 z-40" onClick={onClose} />}

        <div
          className={`
            absolute right-0 top-full mt-2
            w-[90vw] max-w-[340px]
            bg-white border rounded-xl shadow-lg z-50
            ${open ? "block" : "hidden"}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <h2 className="text-base font-semibold text-orange-400">
              Your cart
            </h2>

            <div className="flex items-center gap-3">
              <span className="bg-orange-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {items.length}
              </span>
              <button
                onClick={onClose}
                className="text-lg hover:opacity-70"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="p-3 max-h-[300px] overflow-y-auto space-y-3">
            {items.length === 0 && (
              <p className="text-sm text-gray-500">
                Your cart is empty
              </p>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-2 gap-2"
              >
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Brief description
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <p className="font-semibold text-sm">
                    $
                    {(
                      (item.price || 0) * (item.qty || 1)
                    ).toFixed(2)}
                  </p>

                  <span className="text-xs text-gray-500">
                    Qty: {item.qty || 1}
                  </span>

                  <div className="flex gap-2 text-xs">
                    <button
                      onClick={() => onRemoveItem?.(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => onAddItem?.(item)}
                      className="text-green-600"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between pt-3 font-semibold text-sm">
              <span>Total (USD)</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="p-3 space-y-2">
            <button
              onClick={() => onAddItem?.()}
              className="w-full bg-green-600 text-white py-2 rounded-lg text-sm"
            >
              Add sample item
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
              Continue to checkout
            </button>
          </div>
        </div>
      </>
    );
  }

  /* =========================
     DRAWER MODE (Mobile + Tablet)
  ========================== */
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full
          w-full sm:w-[360px] lg:w-[400px]
          bg-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-orange-400">
            Your cart
          </h2>

          <div className="flex items-center gap-3">
            <span className="bg-orange-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {items.length}
            </span>
            <button
              onClick={onClose}
              className="text-xl hover:opacity-70"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-gray-500">
              Your cart is empty
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start border-b pb-3 gap-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Brief description
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold">
                  $
                  {(
                    (item.price || 0) * (item.qty || 1)
                  ).toFixed(2)}
                </p>

                <div className="flex gap-2 text-sm">
                  <button
                    onClick={() => onRemoveItem?.(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => onAddItem?.(item)}
                    className="text-green-600"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Footer */}
        <div className="p-4 border-t space-y-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => onAddItem?.()}
            className="w-full bg-green-600 text-white py-3 rounded-lg text-base"
          >
            Add sample item
          </button>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-base">
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
}
