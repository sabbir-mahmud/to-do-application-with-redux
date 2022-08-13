import React from 'react';
import { useGetAllTaskQuery } from '../hooks/tasks';

const Home = () => {
  const { data, error, isLoading } = useGetAllTaskQuery()
  console.log(data, error, isLoading);
  return (
    <div>

    </div>
  );
};

export default Home;