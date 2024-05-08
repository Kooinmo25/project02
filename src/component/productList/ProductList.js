import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./ProductCompoReturn.css"


function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function ProductList(props) {

    const productInfoEvent = () => {
        const productInfo = {
            image: props.image,
            title: props.title,
            price: props.price
        };

        props.onAddToCart(productInfo)
    }


    const commas = addCommas(props.price)

    const titleDel = removebtag(props.title)

    return (

        <Col className='productList' style={{ width: '25%', height: "40rem" }}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="text-truncate">{titleDel}</Card.Title>
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {commas} 원
                    </Card.Text>
                    <Card.Text>
                        <button>장바구니 담기</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ProductList;