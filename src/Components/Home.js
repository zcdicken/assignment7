import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";

function Home() {
    const title = useSelector(state=>state.title);

        return(
            <div>
                    <input type="text" placeholder={"Title"}></input>
                    <input type="text" placeholder={"Subtitle"}></input>
                    <input type="text" placeholder={"Text"}></input>
                <button>Submit</button>
                <h3>{title}</h3>
            </div>
        )
}

export default Home;