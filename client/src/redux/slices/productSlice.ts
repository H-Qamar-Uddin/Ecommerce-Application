import {  createSlice} from "@reduxjs/toolkit";
import { stat } from "fs";
import Product from "pages/Product";
import { 
  fetchSingleProductThunk,
  fetchAllProductsThunk,
  deleteProductThunk,
  addProductThunk,
  updateProductThunk
  }  from "./productsServiceThunk";


export type Product = {
    _id: string;
    name: string;
    categories: string;
    size: string;
    price: number;
  };

  export interface ProductsState {
    items: Product[];
    filteredItems: Product[];
    productInfo: Product;
    isLoading: boolean;
  }

  const initialState: ProductsState = {
    items: [],
    filteredItems: [],
    productInfo: {
      _id: "",
      name: "",
      categories: "" ,
      size: "",
      price: 0
    },
    isLoading: false,
  };
 

  export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      resetFilteredItems: (state) => {
        state.filteredItems = [];
      },
    },
    // calling fetch all products  thunk
    extraReducers: (builder) => {
      builder.addCase(fetchAllProductsThunk.pending, (state) => {
        state.isLoading = true;
      });
  
      builder.addCase(fetchAllProductsThunk.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.isLoading = false;
      });

         // deleting single product thunk
         builder.addCase(deleteProductThunk.pending, (state) => {
          state.isLoading = true;
        });
    
      builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
          let productId = action.payload
          state.items = state.items.filter((product) => product._id !==productId)
          state.isLoading = false;
        });

          // adding  single product thunk
          builder.addCase(addProductThunk.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(addProductThunk.fulfilled, (state, action) => {
            state.items.push(action.payload)
            state.isLoading = false;
          });

          builder.addCase(updateProductThunk.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(updateProductThunk.fulfilled, (state, action) => {
            const updatedProduct = action.payload
            state.items = state.items.map((Product) =>{
              if(Product._id === updatedProduct._id)
              return updatedProduct
            })
            return state
            //state.items.push(action.payload)
            //state.isLoading = false;
          });


            //update products example
        // let updatedProduct = action.payload
        // state.items = state.items.map((product) => {
        //   if (product._id === updatedProduct._id) {
        //     return updatedProduct
        //   }
        //   return product
        // }
        // )

      // calling single product thunk
      builder.addCase(fetchSingleProductThunk.pending, (state) => {
        state.isLoading = true;
      });
  
      builder.addCase(fetchSingleProductThunk.fulfilled, (state, action) => {
        state.productInfo = action.payload.data;
        state.isLoading = false;
      });
    }
  }
  );
  
  export const { resetFilteredItems } = productsSlice.actions;
   
  export default productsSlice.reducer;
