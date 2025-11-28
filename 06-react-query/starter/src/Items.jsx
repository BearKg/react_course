import SingleItem from './SingleItem'
import { useFetchTasks } from './reactQueryCustomHook'
const Items = ({ items }) => {
  const { isLoading, data, error, isError } = useFetchTasks()
  // - Query Key
  // The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.
  // - Query Function
  // A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
  if (isLoading) return <p style={{ marginTop: '1rem' }}>Loading...</p>
  if (isError) return <p style={{ marginTop: '1rem' }}>{error.message}</p>
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
