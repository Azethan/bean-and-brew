import React from 'react';
import '../Colours.css';
import './Menu.css';

export default function Menu() {
    return (
        <div className='Menu'>
            <div className='top-banner'>
                <div className='top-banner-info'>
                    <h1>Our Menu</h1>
                    <p> Our menu’s full of the good stuff. Whether you're in the mood for energy or just a quick nibble.</p>
                </div>
            </div>
            <div className='main-menu'>
                <div className='menu-options'>
                    <a href='#Drinks_anchor'>
                        Drinks
                    </a>
                    <a href='#Snacks_anchor'>
                        Snacks
                    </a>
                    <a href='#Specials_anchor'>
                        Specials
                    </a>
                </div>

                <div className='Drinks'>
                    <h2 id='Drinks_anchor'>Drinks</h2>
                    <p>Eight signature coffees that we know you'll love.</p>
                    <div className='drink-options'>
                        <div className='product-drink'>
                            <img src='./drinks/Iced Latte.webp' alt='Iced Latte' />
                            <header> Iced Latte</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/Americano.webp' alt='Americano' />
                            <header> Americano</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/caffe mocha.webp' alt='Caffe Mocha' />
                            <header> Caffe Mocha</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/cappuccino.webp' alt='Cappuccino' />
                            <header> Cappuccino</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/flat white.webp' alt='Flat White' />
                            <header> Flat White</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/iced caramel macchiato.webp' alt='Iced Caramel Macchiato' />
                            <header> Iced Caramel Macchiato</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/vanilla Latte.webp' alt='Vanilla Latte' />
                            <header> Vanilla Latte</header>
                        </div>
                        <div className='product-drink'>
                            <img src='./drinks/viatnemese.webp' alt='Vietnamese' />
                            <header> Vietnamese Iced Coffee</header>
                        </div>
                    </div>

                </div>

                <div className='Snacks'>
                    <h2 id='Snacks_anchor'>Snacks</h2>
                    <p>Snacks caption</p>
                    <div className='snack-options'>
                        <div className='product-snack'>
                            <img src='./snacks/crossaint.jpg' alt='Crossaint' />
                            <header> Crossaint</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Bakewell Tart.jpg' alt='Bakewell Tart' />
                            <header> Bakewell Tart</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Cookie.jpg' alt='Belgian Cookie' />
                            <header> Belgian Cookie</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Loaf Cake.jpg' alt='Loaf Cake' />
                            <header> Loaf Cake</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Muffin.jpg' alt='Muffin' />
                            <header> Muffin</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Pain aux Raisin.jpg' alt='Pain aux Raisin' />
                            <header> Pain aux Raisin</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Salted Caramel Brownie.jpg' alt='Caramel Brownie' />
                            <header> Salted Caramel Brownie</header>
                        </div>
                        <div className='product-snack'>
                            <img src='./snacks/Shortbread.png' alt='Shortbread' />
                            <header> Millionaire's Shortbread</header>
                        </div>
                    </div>
                </div>

                <div className='Specials'>
                    <h2 id='Specials_anchor'>Specials</h2>
                    <p>Specials caption</p>
                    <div className='specials-options'>
                        <div className='product-special'>
                            <img src='./drinks/hallo-snacks.png' alt='Halloween Snacks' />
                            <header> Halloween Snacks</header>
                        </div>
                        <div className='product-special'>
                            <img src='./drinks/smoothie.png' alt='Smoothie' />
                            <header> Smoothie Selection</header>
                        </div>
                        <div className='product-special'>
                            <img src='./drinks/PSL.png' alt='Pumpkin Spiced Latte' />
                            <header> Pumpkin Spiced Latte</header>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}