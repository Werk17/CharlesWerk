import React from 'react';
import Services from './Services';
import CreatePackage from './createPackage';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div>
            <Services />
            <CreatePackage />
        </div>
    );
};

export default ServicesPage;