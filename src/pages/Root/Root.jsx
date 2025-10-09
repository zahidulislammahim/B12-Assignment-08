import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
              <section className='flex-1 bg-[#f5f5f5] '>
                <Outlet></Outlet>
              </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;