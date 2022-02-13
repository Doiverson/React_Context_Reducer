import React, { useReducer } from "react";

import { TodoContext } from "./contexts";
import TodoReducer from "./reducers/TodoReducer";

import List from "./components/List";

const initialState = {
    items: [],
    items2: []
}

const Main = () => {

    const [ state, dispatch ] = useReducer(TodoReducer, initialState);
    // const [ loading, setLoading ] = useState(false);
    // const [ error, seterror ] = useState(false);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <div>
                <List/>
            </div>
        </TodoContext.Provider>
        
    )
}

export default Main;