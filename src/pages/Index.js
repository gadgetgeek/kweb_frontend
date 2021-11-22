import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {

  //state to hold form data
  const [newForm, setNewForm] = useState({
    department: "",
    name: ""
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
  props.searchProduct(newForm)
  // reset the form to empty
  setNewForm({
    department: "",
    name: ""
})

}
const form = (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={newForm.department}
      name="department"
      placeholder="department"
      onChange={handleChange}
    />
    
    <input
      type="text"
      value={newForm.name}
      name="name"
      placeholder="name"
      onChange={handleChange}
    />

    <input type="submit" value="Add Product" />
  </form>
);


if (props.product !== null) {
  return (
    <section>
      {form}
      {props.product.map((p) => {
        return (
          <div key={p._id} className="product">
            <div className="productcontent">
              <Link to={`/products/${p.productId}`}>
                <h1>{p.description}</h1>
              </Link>
              <img src={p.images[0].sizes[0].url} alt={"thing"}/>
              <h3>${p.items[0].price.regular}</h3>
              <button>Add to Cart</button>
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