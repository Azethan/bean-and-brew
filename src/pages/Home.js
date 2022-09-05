import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import '../Colours.css';

export default function Home() {
    return (
        <div className='Home'>
            <div className='main-banner'>
                <div className='main-banner-left'>
                    <h2> Seasonal treats </h2>
                    <p> In honour of the spooky season, try out some of our scary snacks!</p>
                    <button>
                        <Link to='/Menu'>See Our Menu </Link>
                    </button>
                </div>
                <div className='main-banner-right'>
                    <img src='coffee splash.png' alt='coffee splash'></img>
                </div>

            </div>
            <div className='first-article'>
                <article>
                    <h1> Bean and Brew </h1>
                    <p>It’s just a moment in time – just one hand reaching over the counter to present a cup to another outstretched hand.
                        But it’s a connection. Bean and Brew makes sure that everything we do honours that connection – from our commitment to the highest
                        quality coffee in the world, to the way we engage with our customers and communities to do business responsibly.
                    </p>
                </article>
                <img src='black beans.png' alt='black beans' />
            </div>

            <div className='service-options'>
                <div className='s-option'>
                    <Link to='/Services'>
                        <img src='shop.jpg' alt='shops' />
                        <h3>Shops and Restaurants </h3>
                    </Link>
                </div>
                <div className='s-option'>
                    <Link to='/Services'>
                        <img src='bakery.jpg' alt='bakery' />
                        <h3>Baking Lessons</h3>
                    </Link>
                </div>
                <div className='s-option'>
                    <Link to='/Services'>
                        <img src='takeaway.jpg' alt='bakery takeaway' />
                        <h3>Bakery Takeaway</h3>
                    </Link>
                </div>
            </div>

            <div className='coffee-banner'>
                <div className='coffee-banner-info'>
                    <h2>Learn more about your coffee...</h2>
                    <button>
                        <Link to='/Coffee'>Explore here</Link>
                    </button>
                </div>
                <div className='coffee-banner-image'>
                    <img src='FT.png' alt='FT' className='FT' />
                    <img src='beans.png' alt='beans' />
                </div>
            </div>

        </div>
    )
}