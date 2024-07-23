import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleButtonClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          List of Items
        </button>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
