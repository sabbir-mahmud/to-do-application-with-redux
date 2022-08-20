import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCompleteTaskMutation, useDeleteTaskMutation } from '../hooks/tasks';
import { openModal } from '../hooks/updateTaskSlice';


const TaskShow = ({ data }) => {
 const [completeTask, responseInfo] = useCompleteTaskMutation()
 const [deleteTask, result] = useDeleteTaskMutation()
 const is_open = useSelector((state) => state.updateTaskModal.value)
 const dispatch = useDispatch()

 return (
  <tr className='my-12'>
   <td className="p-2">{data.name}</td>
   <td className="p-2">{data.is_done ? 'Completed' : 'Incomplete'}</td>
   <td>
    <button className='btn btn-primary text-white' onClick={() => completeTask(data._id)}>Done</button>
    <label onClick={() => dispatch(openModal(data._id))} for="my-modal" class="ml-3 btn modal-button">Edit</label>
    <button className='btn btn-primary text-white ml-3' onClick={() => deleteTask(data._id)} >Delete</button>
   </td>
  </tr>
 );
};

export default TaskShow;