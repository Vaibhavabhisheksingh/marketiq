import React from 'react';

function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className='col-6 p-5'>
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">We value your privacy and security. Our platform is designed to provide a seamless experience without any spam or gimmicks. You can trust us to keep your information safe and your experience enjoyable.</p>
                    <h2 className="fs-4">The trusted choice</h2>
                    <p className="text-muted">When it comes to reliability and performance, we are the preferred choice for thousands of users. Join them today and experience the difference.</p>
                </div>
                <div className="col-6 p-5">
                    <img src='media/images/ecosystem.png' alt="Ecosystem" style={{ width: '90%'}}/>
                    <div className="text-center">
                        <a href="#" className="mx-5" style={{ textDecoration: 'none' }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="#" style={{ textDecoration: 'none' }}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;