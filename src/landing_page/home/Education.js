import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="Education" style={{ width: '70%' }}/>
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p className="text-muted">Varsity is our free online stock market education platform where you can learn about investing and trading at your own pace.</p>
                    <a href="/" style={{ textDecoration: 'none' }}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className="text-muted pt-3">TradingQ&A is our community-driven platform where you can ask questions and get answers from experienced traders.</p>
                    <a href="/" style={{ textDecoration: 'none' }}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className="col-2"></div>
                
            </div>
        </div>
    );
}

export default Education;