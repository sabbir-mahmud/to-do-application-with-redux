import React from 'react';
import { useCreateTaskMutation, useGetAllTaskQuery } from '../hooks/tasks';

const CreateTask = () => {
 const [createTask, responseInfo] = useCreateTaskMutation()
 const { refetch } = useGetAllTaskQuery()
 console.log(responseInfo);
 const submitForm = async (e) => {
  e.preventDefault()
  const name = e.target.taskName.value;
  const data = {
   name: name
  }
  await createTask(data)
  e.target.reset()
 }
 return (
  <div className='my-5'>
   <form onSubmit={submitForm} method="post">
    <div className="div">
     <label htmlFor="taskName">Name:</label>
     <input className='bg-gray-100 ml-5 rounded w-96 py-1 px-5' type="text" name="taskName" id="taskName" />
     <input className='bg-gray-700 text-white rounded py-1 px-5 ml-5' type="submit" value="Create" />
    </div>
   </form>
  </div>
 );
};

export default CreateTask;