import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalNav from '../common/GlobalNav';
import Footer from './Footer';
import Welcome from '../home/welcome';
import ProductCompoReturn from '../productList/ProductCompoReturn';
import Filter from '../category/Filter';
import Cartreturn from '../shoppingcart/Total';

function Layout() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div className="p-2"><GlobalNav /></div>
            <div className="p-2 flex-grow-1">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Welcome />} />
                        <Route path="/productlist" element={<ProductCompoReturn />} />
                        <Route path="/category" element={<Filter />} />
                        <Route path="/shoppingcart" element={<Cartreturn />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="p-2 mt-auto"><Footer /></div>
        </div>
    );
}

export default Layout;