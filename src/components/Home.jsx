import React from 'react';
import ProductList from './ProductList';
import { ToastContainer } from 'react-toastify';
const Home = () => {
    return (
        <div className='bg-cs1 py-16 min-h-screen'>
            <div className='text-center font-Crimson pb-10'>
                <h3 className='text-4xl '>Choose from our Regimen</h3>
                <p className='text-xl text-cs2r pt-1'>Find your perfect skincare ritual with our expert curated bundles.</p>
            </div>
            <div className='flex justify-center'>
                <div className='mx-16 rounded-xl w-5/6 bg-white'>
                    <ProductList />
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Home;