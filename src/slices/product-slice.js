import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProduct = createAsyncThunk(
    'Product/getAllProduct', async(value, thunkAPI)=>{
    try{
        console.log(value);
        let data = await axios.get(`https://api.escuelajs.co/api/v1/categories/${value}/products`);
        return thunkAPI.fulfillWithValue(data);
    }catch (error){
        thunkAPI.rejectWithValue(error);
        console.log("Error");
    }
});

const productSlice = createSlice({
    name:"Product",
    initialState: {
        loading: false,
        error: null,
        statusCode: null,
        items: [],
        message: null,
        },
        reducers: {},
        extraReducers: (builder) =>{
            builder
                .addCase(getAllProduct.pending, (state) =>{
                    state.loading = true;
                })

                .addCase(getAllProduct.fulfilled, (state, action) =>{
                    state.loading = false;
                    console.log(action);
                    state.status = action.payload.status || 200;
                    state.items = action.payload.data || [];
                })
                .addCase(getAllProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.message = "Something went wrong....";
                })
        }
});

export default productSlice.reducer;