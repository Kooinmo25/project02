
import Button from 'react-bootstrap/Button';

function SortButton({setSortNum}) {
    const sortChange = (newSortNum) => {
        setSortNum(newSortNum);
    };
    
    return (
        <>
        
            <Button as="input" type="button" value="두개씩 보기" onClick={() => sortChange(2)}/>{' '}
            <Button as="input" type="button" value="세개씩 보기" onClick={() => sortChange(3)}/>{' '}
            <Button as="input" type="button" value="네개씩 보기" onClick={() => sortChange(4)}/>
        </>
    );
}

export default SortButton;