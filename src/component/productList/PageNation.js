

import Button from 'react-bootstrap/Button';

function PageNation({ setPageNum }) {
    const pageChange = (newPage) => {   
        setPageNum(newPage);
        window.scrollTo(0, 0)
    };

    return (
        <div>
            <Button as="input" type="button" value="1" onClick={() => pageChange(1)}/>
            <Button as="input" type="button" value="2" onClick={() => pageChange(20)}/>
            <Button as="input" type="button" value="3" onClick={() => pageChange(40)}/>
            <Button as="input" type="button" value="4" onClick={() => pageChange(60)}/>
            <Button as="input" type="button" value="5" onClick={() => pageChange(80)}/>
        </div>
    )
}

export default PageNation