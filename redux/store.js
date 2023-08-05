import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import globalSlice from './slices/globalSlice';
import checkoutSlice from './slices/checkoutSlice';

export const store = configureStore({
    reducer: {
        global: globalSlice,
        checkout:checkoutSlice
    },
});
