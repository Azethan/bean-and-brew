import React from 'react';
import '../Colours.css';
import './Services.css';

export default function Services() {
    return (
        <div className='Services'>
            <div className='services-banner'>
                <h1> Our Services</h1>
                <p>Bean and Brew aims to go above and beyond in our services, scroll to see what we offer. </p>
            </div>
            <div className='shops-restaurants'>
                <h2>

                </h2>
                <div className='card'>
                    <h2>Coffee Shops</h2>
                    <h3>Locations:</h3>
                    <address>
                        72-64 Leadhall Ln, Harrogate HG2 9NJ
                    </address>
                    <address>
                        261 Chapeltown Rd, Leeds LS7 3EX
                    </address>
                    <address>
                        Great George St, Leeds LS1 3BR
                    </address>
                    <img src='shop.jpg' alt='shop' />
                </div>
                <div className='card'>
                    <h2>Cuisine Restaurants</h2>
                    <h3>Locations:</h3>
                    <address>
                        263 Chapeltown Rd, Leeds LS7 3EX
                    </address>
                    <address>
                        13-29 Tewit Well Rd, Harrogate HG2 8JE
                    </address>
                    <address>
                        Middleton Park Rd, Middleton, Leeds LS10 3SA
                    </address>
                    <img src='restaurant.jpg' alt='restaurant' />
                </div>
            </div>
            <div className='baking-lessons'>
                <h2>Baking Lessons</h2>
                <p>All lessons based within our main Harrogate Store</p>
                <div className='baking-lessons-card'>
                    <div className='lessons'>
                        <h3>Beginner</h3>
                        <ul>
                            <li>
                                Monday 9:00 - 11:00
                            </li>
                            <li>
                                Friday 11:00 - 13:00
                            </li>
                        </ul>
                    </div>
                    <div className='lessons'>
                        <h3>Intermediate</h3>
                        <ul>
                            <li>
                                Tuesday 9:00 - 11:00
                            </li>
                            <li>
                                Thursday 9:00 - 11:00
                            </li>
                        </ul>
                    </div>
                    <div className='lessons'>
                        <h3>Expert</h3>
                        <ul>
                            <li>
                                Wednesday 11:00 - 13:00
                            </li>
                            <li>
                                Saturday 11:00 - 13:00
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bakery-takeaway'>
                <div className='call-option'>
                    <h3>Now offering delivery straight to you!</h3>
                    <h4>Call us on +04834928432</h4>
                </div>
                <img src='./snacks/delivery.png' alt='delivery' />
            </div>
        </div>
    )
}