import React from 'react';

const TaskShow = ({ data }) => {
 return (
  <tr>
   <td className="p-2">{data.name}</td>
   <td className="p-2">{data.is_done ? 'Completed' : 'Incomplete'}</td>
  </tr>
 );
};

export default TaskShow;