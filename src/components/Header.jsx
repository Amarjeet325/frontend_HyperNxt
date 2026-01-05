import { useState, useContext } from "react";
import { CiUser, CiHeart } from "react-icons/ci";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const {
    cartItems,
    addItem,
    removeItem,
    total,
    isCartOpen,
    toggleCart,
    closeCart,
    isMobileCartOpen,
    openMobileCart,
    closeMobileCart,
  } = useContext(CartContext);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-9 sm:h-10"
          />
        </div>

        {/* Search (Tablet + Desktop) */}
        <div className="hidden md:flex flex-1 bg-gray-100 rounded-xl p-2 items-center gap-2">
          <select className="bg-transparent outline-none text-sm hidden lg:block">
            <option>All Categories</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
          </select>

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="flex-1 bg-transparent outline-none px-2 text-sm"
          />
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          {/* Partner text */}
          <div className="hidden xl:block text-right">
            <p className="text-xs text-gray-500">
              Apply for Store
            </p>
            <h5 className="font-semibold text-sm">
              Partner
            </h5>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 text-2xl">
            <button className="hover:text-black">
              <CiUser />
            </button>
            <button className="hover:text-black">
              <CiHeart />
            </button>

            {/* Mobile cart button */}
            <button
              className="p-2 bg-gray-100 rounded-full md:hidden"
              onClick={openMobileCart}
              aria-label="Open cart"
            >
              🛒
            </button>
          </div>

          {/* Desktop Cart */}
          <div className="hidden md:block relative text-right">
            <button
              className="text-sm text-gray-500 hover:text-black"
              onClick={toggleCart}
              aria-expanded={isCartOpen}
            >
              Your Cart ({cartItems.length})
            </button>
            <p className="font-bold text-sm">
              ${total.toFixed(2)}
            </p>

            <Cart
              open={isCartOpen}
              onClose={closeCart}
              items={cartItems}
              onRemoveItem={removeItem}
              onAddItem={addItem}
              mode="dropdown"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-gray-100 rounded-lg px-4 py-2 outline-none text-sm"
        />
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-100 px-4 py-4">
          <ul className="space-y-3 text-sm">
            {["Home", "Shop", "Categories", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setOpen(false);
                    }}
                    className="block hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* MOBILE CART DRAWER */}
      <Cart
        open={isMobileCartOpen}
        onClose={closeMobileCart}
        items={cartItems}
        onRemoveItem={removeItem}
        onAddItem={addItem}
        mode="drawer"
      />
    </header>
  );
};

export default Header;
