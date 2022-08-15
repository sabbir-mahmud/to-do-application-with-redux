import React from 'react';
import { useSelector } from 'react-redux';
import { useGetAllTaskQuery } from '../hooks/tasks';
import CreateTask from './CreateTask';
import TaskShow from './TaskShow';
import UpdateTask from './UpdateTask';

const Home = () => {
  const { data, error, isLoading } = useGetAllTaskQuery()
  const is_open = useSelector((state) => state.updateTaskModal.value);
  const id = useSelector((state) => state.updateTaskModal.id);

  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <div className='container mx-auto'>
      <CreateTask />
      {
        is_open && <UpdateTask id={id} />
      }
      <table className="table-auto text-center w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-xs font-semibold uppercase">
          {
            data?.map(task => <TaskShow key={task._id} data={task} />)
          }
        </tbody>
      </table>

    </div>
  );
};

export default Home;