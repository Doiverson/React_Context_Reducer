import React, { useContext, useState } from "react";

import { addItem } from "../actions"; 

import { TodoContext } from "../contexts";

const List = (props) => {

    const [ textValue, setTextValue ] = useState("");
    const { state, dispatch } = useContext(TodoContext);

    const onHandleAdd = () => {
        dispatch(addItem(textValue));
    }

    const onHandleText = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <div>
            <input value={textValue} onChange={onHandleText}/>
            <button onClick={onHandleAdd}>Click</button>
            {state.items.map((item, index) => <p key={index}>{item}</p>)
            }
        </div>
    )
}

export default List;