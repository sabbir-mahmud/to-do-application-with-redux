import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTaskQuery, useUpdateTaskMutation } from '../hooks/tasks';
import { closeModal } from '../hooks/updateTaskSlice';
import Loading from './Loading';

const UpdateTask = ({ id }) => {

 const { data, error, isLoading } = useGetTaskQuery(id)
 const is_open = useSelector((state) => state.updateTaskModal.value)
 const [updateTask, responseInfo] = useUpdateTaskMutation()
 const dispatch = useDispatch()


 const onSubmit = async (e) => {
  e.preventDefault();
  const task = e.target.updateTask.value;
  const data = {
   task: task
  }

  await updateTask({ id, data })
  dispatch(closeModal())
 }

 return (
  <div>
   <input type="checkbox" id="my-modal" class="modal-toggle" />
   <div class="modal">
    <div class="modal-box">
     <h3 class="font-bold text-lg">Update Task</h3>
     {
      isLoading ? <Loading /> : <form onSubmit={onSubmit} method="post">
       <div className="div">
        <label htmlFor="taskName">Name:</label>
        <input className='bg-gray-100 my-3 ml-5 rounded w-64 py-1 px-5' type="text" defaultValue={data?.name} name="updateTask" id="taskName" />
        <input className='bg-gray-700 text-white rounded py-1 px-5 ml-5' type="submit" value="Update" />
       </div>
      </form>
     }
    </div>
   </div>
  </div>
 );
};

export default UpdateTask;