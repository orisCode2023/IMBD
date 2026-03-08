import { create } from 'zustand';

const data = async () => {
    const result = await fetch('http://localhost:3000/api/movies')
    const movies = await result.json();
    return movies.data
} 

export const useMovies = create((set) => ({
  movies: [],
  loading: false,
  fethcMovies: async () => {
    set({loading: true});
    set({movies:await data(), loading: false})
  } 
}))




// const useTodoStore = create((set) => ({
//   todos: [],
//   loading: false,
//   fetchTodos: async () => {
//     set({ loading: true });
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     set({ todos: data, loading: false });
//   },
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
// }));

// export default useTodoStore;


// function TodoList() {
//   const { todos, loading, fetchTodos } = useTodoStore((state) => ({
//     todos: state.todos,
//     loading: state.loading,
//     fetchTodos: state.fetchTodos,
//   }));

//   useEffect(() => {
//     fetchTodos();
//   }, [fetchTodos]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;
