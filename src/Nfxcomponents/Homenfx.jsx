
import React from 'react';
import './Homenfx.css';
// import '../App.css';
import Header from './NavHeader/Header'
import {Nfxui,Bmi} from "../assets"


const Homenfx = () => {
    return (
        <div className='hero'>
            <div className='left'>
                <Header />
                

                <div className='add'>
                    <div></div>
                    <span>the best fitness App for U</span>
                </div>

                <div className='h-text'>
                    <div>
                        <span className='strokes'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>
                            Ideal body
                        </span>
                    </div>
                    <div className='span'>
                        <span>
                            "Push yourself, because no one else is going to do it for you."
                        </span>
                    </div>
                </div>

                <div className='fig'>
                    <div>
                        <span>+50</span>
                        <span>Coaches</span>
                    </div>
                    <div>
                        <span>+100</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness programs</span>
                    </div>
                </div>

                <div className='h-butts'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>


            </div>
            <div className='right'>
                <button className='btn'>Log Out</button>
                <div className='h-rate'>
                    <img src={Bmi} id='bmi' alt="" />
                    <span>BMI</span>
                    <span>20Kg/m<sup>2</sup></span>
                </div>

                <img src={Nfxui} className="uiman" alt="" />

            </div>
        </div>
    )
}

export default Homenfx