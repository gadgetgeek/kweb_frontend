import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
// grab the navigate function
const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab product from props
  const product = props.product;
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing product, when the data is available
  useEffect(() => {
      if(props.product){
          const products = product.find((p) => p._id === id);
          setEditForm(products)
      }
  }, [props.product])

  if (props.product) {
    // grab the target product from the product array
    const products = product.find((p) => p._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

     // handleSubmit for form
     const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updateProduct
        props.updateProduct(editForm, products._id)
        // redirect cheese back to index
        navigate("/")
    }

    const removeProduct = () => {
        props.deleteProduct(products._id)
        navigate("/")
    }
    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="countryOfOrigin"
            onChange={handleChange}
          />
          <input type="submit" value="Update Product" />
        </form>
      );


    return (
      <div className="products">
        <div className="productcontent">
        <h1>{products.name}</h1>
        <h2>{products.price}</h2>
        <img src={products.image} alt={products.name} />
        </div>
        {form}
        <button onClick={removeProduct}>DELETE PRODUCT</button>
      </div>
    );
  } else {
    return <h1>No Product</h1>;
  }
};

export default Show;