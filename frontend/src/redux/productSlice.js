import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get("http://localhost:3000/product/");
  return response.data.products;
});

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const response = await axios.post(
      "http://localhost:3000/product/add",
      product,
    );
    return response.data.newProduct;
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    const response = await axios.get(`http://localhost:3000/product/${id}`);
    return response.data?.product || response.data || null;
  },
);

export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/product/delete/${id}`,
    );
    return id;
  },
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    const response = await axios.put(
      `http://localhost:3000/product/update/${product._id}`,
      product,
    );
    return response.data;
  },
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        ((state.loading = false), (state.products = action.payload));
      })
      .addCase(getProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        ((state.loading = false), state.products.push(action.payload));
      })
      .addCase(addProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        ((state.loading = false), (state.product = action.payload));
      })
      .addCase(getProductById.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        ((state.loading = false),
          (state.products = state.products.filter(
            (v) => v._id != action.payload,
          )));
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (v) => v._id == action.payload._Id,
        );
        state.products[index] = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      });
  },
});

export default productSlice.reducer;
