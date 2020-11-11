import React from 'react';
import './Home.scss'
import Product from "../Product/Product";

const Home = () => {
    return (
        <div className={'home'}>
            <img className={'home__image'}
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
                 alt=""/>

            <div className="home__row">
                <Product id={123} title={'Logitech G502 Hero High Performance Gaming Mouse'} price={29.71} rating={4}
                         image={'https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SL1050_.jpg'}/>

                <Product id={123} title={'Logitech G502 Hero High Performance Gaming Mouse'} price={29.71} rating={4}
                         image={'https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SL1050_.jpg'}/>
            </div>
            <div className="home__row">
                <Product id={3123123} title={'Carnival Games Nintendo Switch'} price={14.99} rating={3}
                         image={'https://images-na.ssl-images-amazon.com/images/I/81CInh6zc2L._SL1500_.jpg'}/>

                <Product id={123} title={'Logitech G502 Hero High Performance Gaming Mouse'} price={29.71} rating={4}
                         image={'https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SL1050_.jpg'}/>

                <Product id={123} title={'Logitech G502 Hero High Performance Gaming Mouse'} price={29.71} rating={4}
                         image={'https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._AC_SL1050_.jpg'}/>
            </div>
            <div className="home__row">
                <Product id={13213} title={'Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or late'} price={144.66} rating={5}
                         image={'https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg'}/>
            </div>

        </div>
    );
};

export default Home;
