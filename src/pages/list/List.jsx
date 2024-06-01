import React, { useEffect, useState } from "react";
import "./list.css";
import axios from "axios";
import toast from "react-hot-toast";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`);
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error(res.data.message);
    }
  };
  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, []);

  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <div className="list add flex-col">
      <p>Menu</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
