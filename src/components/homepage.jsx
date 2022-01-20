import React from 'react';
import Nav from './nav/nav';
import image from '../assets/images/pic.jpg'

const HomePage = () => {
    return (
        <>
            <Nav />
            <div className='container'>
                <div className='col s2 m2 l2'></div>
                <div className='col s8 m8 l8'>
                    <center>
                        <br />
                        <img src={image} alt="" />
                        <h3>Asarawoot   Santhong</h3>
                        <h4>Computer Engineering | KMITL</h4>
                    </center>
                </div>
                <div className='col s2 m2 l2'></div>
            </div>
        </>
    )
};

export default HomePage;
