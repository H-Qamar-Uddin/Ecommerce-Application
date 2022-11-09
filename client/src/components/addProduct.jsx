import { useState } from "react";
import React, { useEffect } from "react";
import { addProductThunk } from "../redux/slices/productsServiceThunk";
import { useDispatch } from "react-redux";


const AddProducts = (props) => {

      const [name, setName] = useState();
      const [categories, setCategories] = useState();
      const [size, setSize] = useState();
      const [price, setPrice] = useState();

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

  const handleAdd = () => {
    
    dispatch(addProductThunk({ name, categories, size, price }))
    alert('Product has been added successfully')
  }
  
    
    const clearState = (event) => {
      setName('');
      setCategories('');
      setSize('');
      setPrice('');
    };

    useEffect(() => {
      dispatch(addProductThunk());
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
        <input type="number" value={price}onChange = {changePrice}/> &nbsp;
        <button onClick={handleAdd}> Add Product</button>&nbsp; &nbsp; 
        <button onClick={clearState}> Clear Form</button>
      </div>  
      );
};
export default AddProducts;