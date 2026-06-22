import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt='Hero' className='mb-5'/>
                <h1 className='mt-5'>
                    Invest in your future
                </h1>
                <p>
                    Join thousands of satisfied users and start your investment journey today.
                </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}> Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;