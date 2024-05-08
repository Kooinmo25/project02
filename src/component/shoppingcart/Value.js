import Stack from 'react-bootstrap/Stack';

function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}
function ValueReturn(props) {

    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">
                <img src={props.image} style={{ width: "30%", height: "auto" }}></img>
            </div>
            <div className="p-2" style={{ fontSize: "18px", color: "#333" }}>{props.title}</div>
            <div className="p-2" style={{ fontSize: "18px", color: "green" }}>{props.price}</div>
        </Stack>
    );
}

export default ValueReturn;