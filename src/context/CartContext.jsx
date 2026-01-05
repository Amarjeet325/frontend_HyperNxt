import React, { createContext, useState, useMemo } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const addItem = (item, qty = 1) => {
    if (!item) return;
    // If item already exists (by id), increment qty
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: (p.qty || 1) + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((s) => !s);

  const openMobileCart = () => setIsMobileCartOpen(true);
  const closeMobileCart = () => setIsMobileCartOpen(false);

  const total = useMemo(() => {
    return cartItems.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    total,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
    isMobileCartOpen,
    openMobileCart,
    closeMobileCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
