import React from 'react';
import { useGetAllTaskQuery } from '../hooks/tasks';
import CreateTask from './CreateTask';
import TaskShow from './TaskShow';

const Home = () => {
  const { data, error, isLoading } = useGetAllTaskQuery()
  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <div className='container mx-auto'>
      <CreateTask />
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