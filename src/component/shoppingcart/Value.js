import Stack from 'react-bootstrap/Stack';

function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function ValueReturn(props) {
    const titledel = removebtag(props.title);


    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">
                <img src={props.image} alt={props.title} style={{ width: "30%", height: "auto" }}></img>
            </div>
            <div className="p-2" style={{ fontSize: "18px", color: "#333" }}>{titledel}</div>
            <div className="p-2" style={{ fontSize: "18px", color: "black" }}>{props.price}</div>
        </Stack>
    );
}

export default ValueReturn;