import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import customFetch from './utils'
import { toast } from 'react-toastify'

export const useFetchTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })
  // - Query Key
  // The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.
  // - Query Function
  // A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
  return { isLoading, data, error, isError }
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { mutate: createTask, isLoading: isCreateLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ query: ['task'] })
      //invalidateQueries là một hàm quan trọng với mục đích làm mới dữ liệu trong cache và có thể gây ra việc re-fetch dữ liệu mới từ nguồn dữ liệu (ví dụ như một API).
      // Cụ thể, invalidateQueries thường được sử dụng để đánh bại hoặc "làm mới" một hay nhiều truy vấn có trong cache, nghĩa là đánh bại dữ liệu hiện có và gửi yêu cầu mới để lấy dữ liệu mới nhất từ nguồn.
      toast.success('task added')
      // setNewItemName('') // ko hoat dong
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })
  return { createTask, isCreateLoading }
}
export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ query: ['task'] })
    },
  })
  return { editTask }
}
export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ taskId }) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ query: ['task'] })
    },
  })
  return {deleteTask}
}
