import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',

    initialState: {
        items: [],
    },

    reducers: {
        // Добавить товар
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            const existingItem = state.items.find(
                item => item.name === name
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    name,
                    image,
                    cost,
                    quantity: 1,
                });
            }
        },

        // Удалить товар полностью
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.name !== action.payload
            );
        },

        // Изменить количество
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const item = state.items.find(
                item => item.name === name
            );

            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

export const {
    addItem,
    removeItem,
    updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
