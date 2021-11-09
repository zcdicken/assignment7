import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {changeTitle, changeSubTitle, changeText} from "../redux/setActions";

function Home() {
    const title = useSelector(state=>state.title);

    const [obj, setObj] = React.useState({
        title:"",
        subTitle:"",
        text:""
    });

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(changeTitle(obj.title));
        dispatch(changeSubTitle(obj.subTitle));
        dispatch(changeText(obj.text));
    }

    const handleChange =(event)=>{
        const newInput={
            ...obj,
            [event.target.name]: event.target.value
        }

        setObj(newInput);
    }

        return(
            <div>
                <input type="text" placeholder={"Title"} name={"title"} onChange={handleChange}></input>
                <input type="text" placeholder={"Subtitle"} name={"subTitle"} onChange={handleChange}></input>
                <input type="text" placeholder={"Text"} name={"text"} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        )
}

export default Home;