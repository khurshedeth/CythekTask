import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setCurrentItem } from '../store/itemSlice';
import { useNavigate } from 'react-router-dom';

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    // Fetch items from the API
    const fetchItems = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const items = await response.json();
        console.log(items); // Log the items to check if they are fetched correctly
        dispatch(setItems(items));
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };
    fetchItems();
  }, [dispatch]);

  const handleItemClick = (item) => {
    sessionStorage.setItem('currentItem', JSON.stringify(item));
    dispatch(setCurrentItem(item));
    navigate('/list/details');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">List of Items</h1>
      <div className="mt-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="p-2 border rounded cursor-pointer hover:bg-gray-100"
          >
            <h2 className="text-xl">{item.title}</h2>
            <p>{item.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
