import React from 'react';
import { useCompleteTaskMutation } from '../hooks/tasks';
const TaskShow = ({ data }) => {
 const [completeTask, responseInfo] = useCompleteTaskMutation()
 console.log(responseInfo);
 return (
  <tr>
   <td className="p-2">{data.name}</td>
   <td className="p-2">{data.is_done ? 'Completed' : 'Incomplete'}</td>
   <td>
    <button onClick={() => completeTask(data._id)}>Done</button>
   </td>
  </tr>
 );
};

export default TaskShow;