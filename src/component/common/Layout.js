import Stack from 'react-bootstrap/Stack';
import GlobalNav from '../common/GlobalNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Welcome from '../home/Welcome';
import ProductCompoReturn from '../productList/ProductCompoReturn';
import Filter from '../category/Filter';
import Cartreturn from '../shoppingcart/Total';


function Layout() {
    return (
        <Stack gap={3}>
            <div className="p-2"><GlobalNav /></div>
            <div className="p-2">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Welcome />} />
                        <Route path="/productlist" element={<ProductCompoReturn />} />
                        <Route path="/category" element={<Filter />} />
                        <Route path="/shoppingcart" element={<Cartreturn />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="p-2"><Footer /></div>
        </Stack>
    );
}

export default Layout;