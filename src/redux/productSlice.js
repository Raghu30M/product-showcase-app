import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}?limit=100`
            );

            return response.data.products;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "product/fetchProductById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/${id}`
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;

                state.product = action.payload;
            })

            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;

                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
