import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/Types'
import { createTodo } from '../Redux/todoSlices'

function TodoCreate() {
    const distpatch = useDispatch()
    const [newTodo, setnewTodo] = useState<string>('')

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz!")
            return
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        distpatch(createTodo(payload))
        setnewTodo("")
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setnewTodo(e.target.value)}
                placeholder='Todo-Giriniz...' className='todo-create_input' type="text" />
            <button onClick={handleCreateTodo} className='todo-create_button '>Oluştur</button>
        </div>
    )
}

export default TodoCreate