import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/category-slice"
import productReducer from "./slices/product-slice"
import detailReducer from "./slices/detail-slice"

const store = configureStore({
    reducer: {
        Category: categoryReducer,
        Product: productReducer,
        Detail: detailReducer,
    }
});

export default store;