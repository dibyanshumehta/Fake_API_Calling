import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllCategories = createAsyncThunk(
    'Category/getAllCategories', async(value, thunkAPI)=>{
    try{
        let data = await axios.get("https://api.escuelajs.co/api/v1/categories");
        return thunkAPI.fulfillWithValue(data);
    }catch (error){
        thunkAPI.rejectWithValue(error);
        console.log("Error");
    }
});

const categorySlice = createSlice({
    name:"Category",
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
                .addCase(getAllCategories.pending, (state) =>{
                    state.loading = true;
                })

                .addCase(getAllCategories.fulfilled, (state, action) =>{
                    state.loading = false;
                    state.status = action.payload.status || 200;
                    state.items = action.payload.data || [];
                })
                .addCase(getAllCategories.rejected, (state, action) => {
                    state.loading = false;
                    state.message = "Something went wrong....";
                })
        }
});

export default categorySlice.reducer;