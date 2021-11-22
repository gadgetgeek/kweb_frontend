import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
// import { authState } from "../atom"
// import { useRecoilState } from "recoil"
// import { useNavigate } from "react-router-dom"

const Shop = (props) => {
    const URL = props.backend+'/shop'
    // State to hold our list of product
    const [product, setProduct] = useState(null);

    // function to get all products
    const getProduct = async () => {
        // make the api call
        const data = await fetch(URL+'/products', {
            method: "get",
            headers: {"Content-Type": "application/json"}
        });
        // set the state to the api data
        setProduct(data);
    };

    // function to filter products
    const searchProduct = async (item) => {
        // make the post request to our API
        const search = await fetch(URL+'/products', {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        });
        // update state for list of products
        setProduct(search);
    };

    useEffect( () => {
        if (product === null) {getProduct()}
    }, [])

    const [cart, setCart] = useState(null)
    
    const getCart = async () => {
        console.log(props.auth)
        await fetch(URL+'/cart', {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: props.auth.id}),
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            console.log(data)
            setCart(data)
        })
    }

    const updateCart = async (newCart) => {
        await fetch(URL+'/cart', {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: props.auth.id,
                cart: newCart
            })
        }).then((data) => {
            console.log(data)
            setCart(data)
        })
    }

    // const addToCart = async (id) => {
    //     getCart()
    //     // get item data with searchProduct route
    //     await fetch(URL+'/products', {
    //         method:"post",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({productId: id})
    //     }).then((data) => {
    //         // push to cart copy with quantity = 1
    //         const item = data
    //         item.quantity = 1
    //         const newCart = cart
    //         newCart.push(item)

    //         // update cart fn
    //         updateCart(newCart)
    //     })
    // }

    const editCart = async (id, num) => {
        
    }
    
    return (
    <div>
        <Routes>
            <Route path="/products" element={
                <Index 
                    auth={props.auth}
                    product={product} 
                    getProduct={getProduct} 
                    searchProduct={searchProduct} 
                    cart={cart}
                    getCart={getCart}
                    // addToCart={addToCart}
                />
            } />
            <Route path="/products/:id" element={
                <Show 
                    auth={props.auth}
                    cart={cart}
                    getCart={getCart}
                    updateCart={updateCart}
                />
            } />
        </Routes>
    </div>
    )
}

export default Shop