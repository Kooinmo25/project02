


function Pages({setPageNum}) {
    const pageChange = (newPage) => {
        setPageNum(newPage);
    };

    return (
        <div>
            <button>1</button>
            <button onClick={() => pageChange(20)}>2</button>
            <button onClick={() => pageChange(40)}>3</button>
            <button onClick={() => pageChange(60)}>4</button>
            <button onClick={() => pageChange(80)}>5</button>
        </div>
    )
}

export default Pages