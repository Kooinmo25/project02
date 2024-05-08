import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';

function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const Id = "SN1EHooVeXWlRky05tyJ";
    const Password = "_MdOmJ8du5";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=여성 옷&filter=used:false&sort=sim&display=10&start=11", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": Id,
                "X-Naver-Client-Secret": Password,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => {
                setProducts(json.items.map(item => ({
                    id: item.itemId,
                    name: item.title,
                    price: item.lprice,
                    image: item.image,
                    color: item.color, // 가정한 필드, API 응답에 따라 실제 필드명을 변경하세요
                    size: item.size, // 가정한 필드, API 응답에 따라 실제 필드명을 변경하세요
                })));
            });
    }, []);

    return (
        <Stack direction="vertical" gap={3}>
            {products.map((product) => (
                <div key={product.id} className="product-item d-flex">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details flex-fill">
                        <div className="product-title">{product.name}</div>
                        <div className="product-price">가격: ${product.price.toLocaleString()}원</div>
                        <div className="product-color">색상: {product.color}</div>
                        <div className="product-size">사이즈: {product.size}</div>
                        <div className="product-quantity">수량: {/* 여기에 수량 정보 입력 */}</div>
                    </div>
                    <div className="product-actions">
                        {/* 주문 수정 버튼 */}
                        <Button variant="outline-primary">주문 수정</Button>
                    </div>
                </div>
            ))}
            <div className="d-grid">
                {/* 주문하기 버튼 */}
                <Button variant="primary">주문하기</Button>
            </div>
        </Stack>
    );
}

export default ShoppingCart;