import React from 'react';
import {useSelector} from "react-redux";

function Products() {
    const title = useSelector(state=>state.title);
    const subTitle = useSelector(state=>state.subTitle);
    const text = useSelector(state=>state.text);

    return(
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h3>{text}</h3>
        </div>
    )
}

export default Products;