import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    { id: 1, text: "hello world" }
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload   // ✅ direct string
      }
      state.todos.push(todo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      )
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload
      const existingTodo = state.todos.find(
        todo => todo.id === id
      )

      if (existingTodo) {
        existingTodo.text = text   // ✅ update properly
      }
    }

  }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
