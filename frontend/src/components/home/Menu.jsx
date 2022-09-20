import React from 'react'
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Menu = () => {
    const AddToCartHandler = (itemNum) => {

    }
    return (
        <section id="menu">
            <h1>MENU</h1>
            <div className="">
                <MenuCard itemNum={1} burgerSrc={burger1} price={200} title={"Cheese Burger"} handler={AddToCartHandler} />
                <MenuCard itemNum={2} burgerSrc={burger2} price={500} title={"Veg Cheese Burger"} handler={AddToCartHandler} />
                <MenuCard itemNum={3} burgerSrc={burger3} price={1700} title={"Cheese Burger with French Fries"} handler={AddToCartHandler} />
            </div>
        </section>
    )
}

export default Menu;