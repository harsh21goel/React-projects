import { createContext,useContext} from 'react'


export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo_title:'test',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    ToggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}