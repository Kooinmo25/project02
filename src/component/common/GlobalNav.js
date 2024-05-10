import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartContext from '../productList/CartContext';

function GlobalNav() {
  const expand = 'md';
  const { cartList } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(cartList.length);

  useEffect(() => {
    // 장바구니 상품 수가 변경될 때마다 카운트 업데이트
    setCartItemCount(cartList.length);
    console.log(cartList)
  }, [cartList]);

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/" className="mb-2">Aqua Spirit</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-evenly flex-grow-1 pe-3">
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link href="productlist">상품</Nav.Link>
                <Nav.Link href="category">카테고리</Nav.Link>
                <Nav.Link href="shoppingcart">장바구니{cartItemCount}</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default GlobalNav;
