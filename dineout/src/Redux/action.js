import axios from "axios";
// require('dotenv').config();
import {
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    ADD_TODOS_REQUEST,
    ADD_TODOS_SUCCESS,
    ADD_TODOS_ERROR
} from "./actionTypes.js";



export const addTodo = (todo) => {
    return function dispatch(dispatch, getState) {
        const port = process.env.REACT_APP_JSON_SERVER_PORT;
        console.log(port)
        // axios.post(`http://localhost:${port}/todos`, todo)
        //     .then(response => dispatch({ type: ADD_TODOS_SUCCESS, payload: response.data }))
        //     .catch(error => dispatch({ type: ADD_TODOS_ERROR, payload: error }))
        fetch(``)


    }
}




// export const addTodo = (todo) => {
//     const port = process.env.REACT_APP_JSON_SERVER_PORT;
//     console.log(port)
//     axios.post(`http://localhost:${port}/todos`, todo)
//         .then(response => dispatch({ type: ADD_TODOS_SUCCESS, payload: response.data }))
//         .catch(error => dispatch({ type: ADD_TODOS_ERROR, payload: error }))


// }



export const getTodos = () => dispatch => {
    const port = process.env.REACT_APP_JSON_SERVER_PORT;
    dispatch({ type: GET_TODOS_REQUEST });
    axios.get(`http://localhost:${port}/todos`)
        .then((response) => dispatch({ type: GET_TODOS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: GET_TODOS_ERROR, payload: error }))
}