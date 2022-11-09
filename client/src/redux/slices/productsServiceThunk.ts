import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productSlice";

interface asyncObject {

  _id: string;
  name: string;
  categories: string;
  size: string;
  price: number;
  productInfo?: Product | null;
 
}

const path = "http://localhost:4000/api/v1";

// product thunks
const fetchSingleProductThunk = createAsyncThunk(
  "product/fetch",
  async (params: any) => {
    const { id } = params;
    const URL = `${path}/products/${id}`;
    const response = await axios.get(URL);
    return { data: response.data, status: response.status };
  }
);


// TODO: export the function, and complete the axios call according to your backend and then have a builder case to re-render the UI
const deleteProductThunk = createAsyncThunk(
  "delete/remove",
  async (productId: string) => {
    const token = localStorage.getItem("token") || "";
    const response = await axios.delete(`${path}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return productId;
  }

  
);

const addProductThunk = createAsyncThunk(
  "add product/new product",
  async (productInfo: asyncObject) => {
    const token = localStorage.getItem("token") || "";
     return axios.post(`${path}/products`, productInfo, {
       headers: {
        
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.data);
  }
);


const updateProductThunk = createAsyncThunk(
  "Edit Product/Update Product",
  async ({ productInfo, productId }: {
    productInfo: Partial<asyncObject>;
    productId: string;
  }) => {
    const token = localStorage.getItem("token") || "";
     return axios.put(`${path}/products/${productId}`, productInfo, {
       headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.data);
  }
);

const fetchAllProductsThunk = createAsyncThunk("products/fetch", async () => {
  const URL = `${path}/products`;
  const token = localStorage.getItem("token") || "";
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { data: response.data, status: response.status };
});

export {
  fetchSingleProductThunk,
  deleteProductThunk,
  fetchAllProductsThunk,
  addProductThunk,
  updateProductThunk
};
