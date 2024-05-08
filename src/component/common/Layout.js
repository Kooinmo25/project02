import Stack from 'react-bootstrap/Stack';
import GlobalNav from '../common/GlobalNav';
import ProductList from '../ProductList';
import Category from '../Category';
import Shoppingcart from '../Shoppingcart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Welcome from '../home/Welcome';


function Layout() {
    return (
        <Stack gap={3}>
            <div className="p-2"><GlobalNav /></div>
            <div className="p-2">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Welcome />} />
                        <Route path="/productlist" element={<ProductList />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/shoppingcart" element={<Shoppingcart />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="p-2"><Footer /></div>
        </Stack>
    );
}

export default Layout;