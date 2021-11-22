import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login"
import Shop from "../components/Shop"
import Landing from "../pages/Landing"

const Main = (props) => {
  // your deployed heroku URL
  const backend = "http://localhost:4001/"

  const [auth, setAuth] = useState(null)
  console.log(auth)

  const getAuth = (user) => {
    const token = [
      {id: user._id},
      {loggedIn: true}
    ]

    const seedData = async () => {
      // make the get request to our API
      await fetch(URL+'/seed', {
          method: "get",
          headers: {"Content-Type": "application/json"},
      })
    }

    seedData()
    
    setAuth(token)
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={
          <Landing auth={auth}/>
        } />
        <Route path="/signup" element={
          <Signup backend={backend} auth={auth}/>
        }/>
        <Route path="/login" element={
          <Login backend={backend} auth={auth} getAuth={getAuth}/>
        }/>
        <Route path="/shop/*" element={
          <Shop backend={backend} auth={auth}/>
        } />
      </ Routes>
    </main>
  );
};

export default Main;