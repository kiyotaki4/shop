import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [groupedCart, setGroupedCart] = useState({});

    // Функция для увеличения количества товара
    const increaseItemCount = (name) => {
        setGroupedCart(prevState => {
            const newCart = { ...prevState };
            if (newCart[name]) {
                newCart[name].count += 1;
            }
            return newCart;
        });
    };

    // Функция для уменьшения количества товара
    const decreaseItemCount = (name) => {
        setGroupedCart(prevState => {
            const newCart = { ...prevState };
            if (newCart[name] && newCart[name].count > 0) {
                newCart[name].count -= 1;
            }
            return newCart;
        });
    };

    return (
        <GlobalContext.Provider value={{ groupedCart, increaseItemCount, decreaseItemCount }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;