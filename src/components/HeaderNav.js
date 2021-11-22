import React, {Fragment, useState} from "react";
import Header from "./Header";

// import burgermenu 
import BurgerMenu from "./BurgerMenu";

const HeaderNav =() =>{
    const [showBurgerMenu, setBurgerMenu] = useState(false);

    const closeBurgerMenu = () => {
        setShowBurgerMenu(false);
    }

    const toggleBurgerMenu = ()=>{
        setShowBurgerMenu(!showBurgerMenu);
    };

    return (
        <Fragment> 
            <Header toggleBurgerMenu={toggleBurgerMenu}/>
            <BurgerMenu isOpen={showBurgerMenu} closeBurgerMenu={closeBurgerMenu}/>
        </Fragment>
    );
};

export default HeaderNav;