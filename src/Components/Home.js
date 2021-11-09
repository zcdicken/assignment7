import React from 'react';
import {useDispatch} from "react-redux";
import {changeTitle, changeSubTitle, changeText} from "../redux/setActions";

function Home() {

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
                <form>
                    <input type="text" placeholder={"Title"} name={"title"} onChange={handleChange} required></input>
                    <input type="text" placeholder={"Subtitle"} name={"subTitle"} onChange={handleChange} required></input>
                    <input type="text" placeholder={"Text"} name={"text"} onChange={handleChange} required></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        )
}

export default Home;