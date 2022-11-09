import { useEffect } from "react";
import { fetchAllProductsThunk, deleteProductThunk } from "../redux/slices/productsServiceThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/configureStore";
import ".././styles/style.css";
const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => {
    return state;
  });
  useEffect(() => {
    dispatch(fetchAllProductsThunk());
  }, [dispatch]);

  return (
    <div className="productPage">
      <h2>List of product</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Categories</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.items.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.categories}</td>
              <td>{product.size}</td>
              <td>{product.price}</td>
              {/* <button onClick={()=> dispatch(deleteProductThunk(product._id))}>Delete</button> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Product;
