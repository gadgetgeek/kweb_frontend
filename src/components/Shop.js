import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { authState } from "../atom"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

const Shop = (props) => {
    const URL = props.backend+'/shop'
    // State to hold our list of product
    const [product, setProduct] = useState(null);

    // function to get updated list of a product
    const getProduct = async () => {
    // make the api call
    const response = await fetch(URL+'/products');
    // turn the response in an object
    const data = await response.json();
    // set the state to the api data
    setProduct(data);
  };

    // function that will later be passed data from our new/create form and make the post request to create a new product
    const createProduct = async (item) => {
    // make the post request to our API
        await fetch(URL+'/products', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
        });
        // get updated list of a product
        getProduct();
    };

    // function to update a product
    const updateProduct = async (item, id) => {
        // make the put request
        await fetch(URL+'/products' + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        // update the list of product
        getProduct()
    }

    // create function to delete a product
    const deleteProduct = async (id) => {
        // make the delete request
        await fetch(URL+'/products' + id, {
            method: "delete"
        })
        // update the list of a product
        getProduct()
    }
    
    return (
    <div>
        <Routes>
        <Route path="/products" element={
        <Index product={product} createProduct={createProduct}/>
        } />
        <Route path="/products/:id" element={
        <Show product={product} updateProduct={updateProduct} deleteProduct={deleteProduct}/>} 
        />
        </Routes>
    </div>
    )
}

export default Shop