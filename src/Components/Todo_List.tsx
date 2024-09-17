import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { TodoType } from '../types/Types'

function Todo_List() {
    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {
                todos && todos.map((todo: TodoType) => (
                    <Todo key={todo.id} todoProps={todo} />
                ))

            }


        </div>
    )
}

export default Todo_List