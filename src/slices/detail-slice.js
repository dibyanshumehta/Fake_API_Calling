import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllDetail = createAsyncThunk(
    'Detail/getAllDetail', async(value, thunkAPI)=>{
    try{
        console.log(value);
        let data = await axios.get(`https://api.escuelajs.co/api/v1/products/${value}`);
        return thunkAPI.fulfillWithValue(data);
    }catch (error){
        thunkAPI.rejectWithValue(error);
        console.log("Error");
    }
});

const detailSlice = createSlice({
    name:"Detail",
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
                .addCase(getAllDetail.pending, (state) =>{
                    state.loading = true;
                })

                .addCase(getAllDetail.fulfilled, (state, action) =>{
                    state.loading = false;
                    console.log(action);
                    state.status = action.payload.status || 200;
                    state.items = action.payload.data || [];
                })
                .addCase(getAllDetail.rejected, (state, action) => {
                    state.loading = false;
                    state.message = "Something went wrong....";
                })
        }
});

export default detailSlice.reducer;