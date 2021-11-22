import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login"
import Shop from "../components/Shop"
import Landing from "../pages/Landing"

const Main = (props) => {
  
  return (
    <main>
      <Routes>
        <Route path="/" element={
          <Landing auth={props.auth}/>
        } />
        <Route path="/signup" element={
          <Signup backend={props.backend} auth={props.auth}/>
        }/>
        <Route path="/login" element={
          <Login backend={props.backend} auth={props.auth} getAuth={props.getAuth}/>
        }/>
        <Route path="/shop/*" element={
          <Shop backend={props.backend} auth={props.auth}/>
        } />
      </ Routes>
    </main>
  );
};

export default Main;