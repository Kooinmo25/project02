// Layout.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalNav from '../common/GlobalNav';
import Footer from './Footer';
import Welcome from '../home/Welcome';
import ProductCompoReturn from '../productList/ProductCompoReturn';
import Filter from '../category/Filter';
import CartProvider from '../productList/CartProvider';
import Cartreturn from '../shoppingcart/Total';


function Layout() {
    const [list, setList] = useState([]);




    return (
        <CartProvider>
            <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
                <div className="p-2"><GlobalNav /></div>
                <div className="p-2 flex-grow-1">
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Welcome list={list} setList={setList} />} />
                            <Route
                                path="/productlist"
                                element={<ProductCompoReturn list={list} setList={setList} />}
                            />
                            <Route path="/category" element={<Filter list={list} setList={setList} />} />
                            <Route
                                path="/shoppingcart"
                                element={<Cartreturn />}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
                <div className="p-2 mt-auto"><Footer /></div>
            </div>
        </CartProvider>
    );
}

export default Layout;
