import Filter from "./component/category/Filter";
import Layout from "./component/common/Layout";
import ProductCompoReturn from "./component/productList/ProductCompoReturn";
import Cartreturn from "./component/shoppingcart/Total";




function App() {
  return (
    <div>
    <Cartreturn />
    <Filter />
    <ProductCompoReturn />
    <Layout />
    </div>
  );
}

export default App;