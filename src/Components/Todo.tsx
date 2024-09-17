import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import '../Css/Todo.css'
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../Redux/todoSlices';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const [editTable, seteditTable] = useState<boolean>(false)
    const { id, content } = todoProps
    const [updatedTodo, setupdatedTodo] = useState<string>(content)
    const dispatch = useDispatch()

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdatedTodo = () => {
        const payload: TodoType = {
            id,
            content: updatedTodo
        }
        dispatch(updateTodo(payload))
        seteditTable(false)
    }

    return (
        <div className='Todo-Container'>
            {
                editTable ? <input
                    value={updatedTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setupdatedTodo(e.target.value)}
                    placeholder='Todo-Giriniz...' className='todo-Container_input' type="text" /> : <div>{content}</div>
            }

            <div className='Todo-icons'>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} />
                {
                    editTable ? <FaCheck onClick={handleUpdatedTodo} /> : <FaRegEdit onClick={() => seteditTable(true)} />
                }


            </div>
        </div>
    )
}

export default Todo