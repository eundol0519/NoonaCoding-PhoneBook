import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ setModal, data }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_INFO", payload: { id } });
  };

  return (
    <div className="box" key={data.id}>
      <p>
        {data.name} / {data.phone}
      </p>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setModal({ open: true, type: "EDIT", data: data })}
        >
          수정
        </button>
        <button onClick={() => deleteHandler(data.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Card;
