import React from 'react';

import './spinner.css';

const Spinner = () => {
    return (
        <div className='lds-css ng-scope'>
            <div className='lds-pacman'
                 style={{width: '100%', height: '100%'}}>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;