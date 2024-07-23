import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem } from '../store/itemSlice';
import { useNavigate } from 'react-router-dom';

function EachDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentItem = useSelector((state) => state.items.currentItem);

  useEffect(() => {
    const storedItem = JSON.parse(sessionStorage.getItem('currentItem'));
    if (!currentItem && storedItem) {
      dispatch(setCurrentItem(storedItem));
    }
  }, [currentItem, dispatch]);

  const handleBackClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/list');
    }, 500);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <button onClick={handleBackClick} className="mb-4 text-blue-500">Back to List</button>
      {currentItem ? (
        <div>
          <h1 className="text-2xl font-bold">{currentItem.title}</h1>
          <p>ID: {currentItem.id}</p>
          <p>Description: {currentItem.title}</p>
          <p>Status: {currentItem.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ) : (
        <div>No item selected</div>
      )}
    </div>
  );
}

export default EachDetails;
