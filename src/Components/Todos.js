import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../Redux/reducer';
import { GoPlus } from 'react-icons/go'
import { motion } from 'framer-motion'



const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj))
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState("");


    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const add = () => {
        if (todo === "") {
            alert("input is empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false
            });
            setTodo("");
        }


    }
    console.log(props)

    return (
        <div className='addTodos'>
            <input type="text" className='todo-input' onChange={(e) => handleChange(e)} />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='add-btn' onClick={() =>add()}>< GoPlus /></motion.button>
            <br />

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);