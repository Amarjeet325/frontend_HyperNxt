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
    openCart,
    closeCart,
    isMobileCartOpen,
    openMobileCart,
    closeMobileCart,
  } = useContext(CartContext);

  return (
    <header className="border-b">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center gap-6">

        {/* Logo */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-10 mx-auto sm:mx-0"
          />
        </div>

        {/* Search */}
        <div className="hidden lg:flex flex-1 bg-gray-100 rounded-xl p-2 items-center gap-2">
          <select className="bg-transparent outline-none text-sm">
            <option>All Categories</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
          </select>

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="flex-1 bg-transparent outline-none px-2"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 ml-auto">

          <div className="hidden xl:block text-right">
            <p className="text-sm text-gray-500">Apply for Store</p>
            <h5 className="font-semibold">Partner</h5>
          </div>

          {/* Icons */}
          <div className="flex gap-3">
           <CiUser />
           <CiHeart />
            <button
              className="p-2 bg-gray-100 rounded-full lg:hidden"
              onClick={() => openMobileCart()}
              aria-label="Open cart"
            >
              🛒
            </button>
          </div>

          {/* Cart (desktop: dropdown) */}
          <div className="hidden lg:block text-right relative">
            <button
              className="text-sm text-gray-500 hover:text-black cursor-pointer"
              onClick={() => toggleCart()}
              aria-expanded={isCartOpen}
            >
                Your Cart ( {cartItems.length} items )
            </button>
            <p className="font-bold">${total.toFixed(2)}</p>

            {/* Dropdown anchored to this container */}
            <Cart
              open={isCartOpen}
              onClose={() => closeCart()}
              items={cartItems}
              onRemoveItem={removeItem}
              onAddItem={addItem}
              mode="dropdown"
            />
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 py-3 bg-gray-100">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setOpen(false);
                }}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setOpen(false);
                }}
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Cart drawer */}
      <Cart
        open={isMobileCartOpen}
        onClose={() => closeMobileCart()}
        items={cartItems}
        onRemoveItem={removeItem}
        onAddItem={addItem}
        mode="drawer"
      />
    </header>
  );
};

export default Header;
