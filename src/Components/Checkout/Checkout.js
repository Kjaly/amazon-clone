import React from 'react';
import './Checkout.scss'
import {useStateValue} from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./CheckoutProduct/Subtotal";

const Checkout = () => {
    const [{basket}] = useStateValue()
    return (
        <div className={'checkout'}>
            <div className="checkout__left">
            <img className={'checkout__ad'}
                 src="https://www.adweek.com/wp-content/uploads/2018/09/amazon-advertising-content-2018.png" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
                </div>
            ) : (
                <div className={'checkout__title'}>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>)
            }
            </div>
            <div className="checkout__right">
                {basket.length ? <Subtotal/> : ''}

            </div>
        </div>
    );
};

export default Checkout;
