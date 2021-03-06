import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            height: 800,
        }}>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 class="text-5xl font-bold uppercase">New Smile To Start HERE!</h1>
                        <p class="py-6 pr-20">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/appoinment">  <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;