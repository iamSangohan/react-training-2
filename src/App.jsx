import { useFetch } from './hooks/useFetch'

function App() {

  const {loading, data, errors} = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000")
  
  return <div>
      {loading && <p>Loading...</p>}
      {errors && <p>Something went wrong</p>}
      {data && <div>
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}  
        </ul>  
      </div>}
  </div> 
}

export default App
