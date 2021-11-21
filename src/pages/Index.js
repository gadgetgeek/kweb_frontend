import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {

  //state to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    price: Number,
    department: "",
    aisle: "",
    image: "",
    location: ""
  })

  //handleChange function to sync input with state 
  const handleChange = (event) =>{
     // make a copy of state
     const newState = {...newForm}
     // update the newState
     newState[event.target.name] = event.target.value
     // update the state
     setNewForm(newState)
 }


   // handleSubmit function for when form is submitted
const handleSubmit = (event) => {
  // prevent the page from refreshing
  event.preventDefault()
  // pass the form data to createPeople function
  props.createProduct(newForm)
  // reset the form to empty
  setNewForm({
    name: "",
    price: Number,
    department: "",
    aisle: "",
    image: "",
    location: ""
})

}
const form = (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={newForm.name}
      name="name"
      placeholder="name"
      onChange={handleChange}
    />
   
    <input
      type="text"
      value={newForm.image}
      name="image"
      placeholder="Image URL"
      onChange={handleChange}
    />
      <input
      type="text"
      value={newForm.price}
      name="price"
      placeholder="price"
      onChange={handleChange}
    />
        <input
      type="text"
      value={newForm.department}
      name="department"
      placeholder="department"
      onChange={handleChange}
    />
        <input
      type="text"
      value={newForm.aisle}
      name="aisle"
      placeholder="aisle"
      onChange={handleChange}
    />
   
    <input type="submit" value="Add Product" />
  </form>
);


if (props.product) {
  return (
    <section>
      {form}
      {props.product.map((products) => {
        return (
          <div key={products._id} className="product">
            <div className="productcontent">
            <Link to={`/products/${products._id}`}>
              <h1>{products.name}</h1>
            </Link>
            <img src={products.image} alt={products.name} />
            <h3>${products.price}</h3>
            <h4>Department: {products.department}</h4>
            <h4>aisle: {products.aisle}</h4>
            <h4>location: {products.location}</h4>
            <a src="#"><button className="addcartbtn">Add to Cart</button></a>
            </div>
          </div>
        );
      })}
    </section>
  );
} else {
  return (
    <section>
      {form}
      <h1>Loading...</h1>
    </section>
  );
}
};
export default Index;