import React from 'react';
import { Link } from 'react-router-dom'
import '../Colours.css';
import './Coffee.css';

export default function Coffee() {
    return (
        <div className='Coffee'>
            <h1> THE COFFEE.</h1>
            <div className='coffee-page'>
                <div className='coffee-left'>
                    <div className='specialist-coffee'>
                        <h2>Your Coffee. Your Choice.</h2>
                        <p>
                            Here at Bean and Brew, we understand the power that a truly great coffee
                            holds. It can give us a boost when we need it most, or a moment of calm in
                            a hectic day.

                        </p>
                    </div>
                    <div className='menu-links'>
                        <div className='coffee-options'>
                            <img src='./drinks/Iced Latte.webp' alt='Iced Latte' />
                            <img src='./drinks/caffe mocha.webp' alt='Caffe Mocha' />
                            <img src='./drinks/iced caramel macchiato.webp' alt='Iced Caramel Macchiato' />
                        </div>
                        <button>
                            <Link to='/Menu'>
                                See more coffees
                            </Link>
                        </button>
                        <div className='coffee-options'>
                            <img src='./drinks/Americano.webp' alt='Americano' />
                            <img src='./drinks/flat white.webp' alt='Flat White' />
                            <img src='./drinks/vanilla Latte.webp' alt='Vanilla Latte' />
                        </div>
                    </div>
                </div>
                <div className='coffee-mid'>
                    <img src='coffee main image.png' alt='coffee main' />
                </div>
                <div className='coffee-right'>
                    <h2>Sourcing Our Coffee</h2>
                    <p>
                        Your favourite coffee has the ability to uplift the lives
                        of the people who grow it, the expert baristas who craft it, the communities
                        that drink it, and the environment we all depend on. Bean + Brew makes sure of this by being the
                        first company in the UK to use only FairTrade coffee and all organic milk.
                    </p>
                    <img src='FT farmers.png' alt='FT Farmers' />
                </div>
            </div>
        </div>
    )
}