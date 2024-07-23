import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h1>I just saw the task you mentioned, but it was quite literally at the eleventh hour. I apologize for the delay in my response. I'll prioritize it right away and keep you updated on my progress.

Thank you for your patience.</h1>
      <button
        onClick={handleButtonClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        List of Items
      </button>
    </div>
  );
}

export default Dashboard;
