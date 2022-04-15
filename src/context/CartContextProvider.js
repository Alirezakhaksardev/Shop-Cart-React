import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkedout: false,
}
const sumItems = items => {
    const itemsCounter = items.reduce((total,products)=> total + products.quantity,0);
    let total = items.reduce((total,products)=> total + products.price * products.quantity,0).toFixed(2);
    return {itemsCounter , total}
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkedout: false,
            }
        case "REMEOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return { 
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return { 
                ...state,
                ...sumItems(state.selectedItems)
             }
        case "CHECKEDOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkedout: true,
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkedout: false,
            }

        default: return state;
    }
}


export const CartContext = createContext();

const Cartcontextprovider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (

        <CartContext.Provider value={{ state, dispatch }}> {/* value = {state: state , dispatch: dispatch} not difference with top code */}
            {children}
        </CartContext.Provider>
    );
}

export default Cartcontextprovider;
