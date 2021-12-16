import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Splash(props) {
    return (
        <div className="component">
            <Header />
            SPLASH PAGE!
            <div>
                <button>Employer</button>
                <button>Employee</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Splash;