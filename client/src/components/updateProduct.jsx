import React, { useEffect , useState} from "react";
import { updateProductThunk, fetchAllProductsThunk } from "../redux/slices/productsServiceThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/configureStore";
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {

const { productId } = useParams();
const {products} = useSelector((state:RootState) => state.products);
const product = products.find((product) => product._id === productId);
const [state, setState] = useState(product);

      const [name, setName] = useState(product.name);
      const [categories, setCategories] = useState(product.categories);
      const [size, setSize] = useState(product.size);
      const [price, setPrice] = useState(product.price);

     const dispatch = useDispatch();

    const changeName = (event) => {
      setName(event.target.value);
    };
    const changeCategories = (event) => {
      setCategories(event.target.value);
    };
    const changeSize = (event) => {
      setSize(event.target.value);
    };
    const changePrice = (event) => {
      setPrice(event.target.value)
    }

  const handleUpdate = () => {

    dispatch(updateProductThunk({ name, categories, size, price }))
    alert('Product has updated successfully')
  }

    useEffect(() => {
      dispatch(updateProductThunk());
    }, [dispatch]);


    return(
      <div>
        <label>Name :</label>
        <input type="text" value={name} onChange={changeName}/>
        <label>Categories : </label>
        <input type="text" value={categories} onChange={changeCategories} />
        <label>Size :</label>
        <input type="text" value={size} onChange={changeSize}/>
        <label>Price :</label>
        <input type="number" value={price} onChange = {changePrice}/>
        <button onClick={handleUpdate}> Update Product</button>
      </div>  
      );
};
export default UpdateProduct;