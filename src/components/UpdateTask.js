import React from 'react';
import { useGetTaskQuery } from '../hooks/tasks';

const UpdateTask = ({ id }) => {

 const { data, error, isLoading } = useGetTaskQuery(id)
 return (
  <div>
   <input type="checkbox" id="my-modal" class="modal-toggle" />
   <div class="modal">
    <div class="modal-box">
     <h3 class="font-bold text-lg">Update Task</h3>
     <form method="post">
      <div className="div">
       <label htmlFor="taskName">Name:</label>
       {
        isLoading ? 'loading' : <input className='bg-gray-100 my-3 ml-5 rounded w-64 py-1 px-5' type="text" defaultValue={data?.name} name="taskName" id="taskName" />
       }
       <input className='bg-gray-700 text-white rounded py-1 px-5 ml-5' type="submit" value="Update" />
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default UpdateTask;