import Category from "./Category";


function Filter({list, setList}) {
    return (
        <>
            <Category list={list} setList={setList}/>
        </>
    );
}

export default Filter;
