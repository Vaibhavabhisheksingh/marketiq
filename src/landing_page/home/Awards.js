import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="media/images/largestBroker.svg" alt='Awards' className='mb-5'/>
                </div>
                <div className="col-lg-6 col-sm-12 p-5 mt-5">
                    <h1> Largest Broker in the India</h1>
                    <p className="mb-5">2+ million users trust us to manage their investments and grow their wealth.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Government Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt='Awards'  style={{width:"90%"}}/>
                    
                </div>

            </div>
        </div>
     );
}

export default Awards;