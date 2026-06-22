import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
                    <p className="text-muted">Our pricing is designed to be competitive and affordable, ensuring that you get the best value for your investment. We offer flexible plans that cater to different needs and budgets, so you can choose the one that suits you best.</p>
                    <a href="#" style={{ textDecoration: 'none' }}>See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity and direct <br /> mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;