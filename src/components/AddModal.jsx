import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddModal = ({ setModal }) => {
  const phoneList = useSelector((state) => state.phoneList);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({ name: "", phone: "" });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    setInfo({ name: "", phone: "" });
    dispatch({
      type: "ADD_INFO",
      payload: {
        info: {
          ...info,
          id: phoneList.length > 0 ? phoneList[phoneList.length - 1].id + 1 : 1,
        },
      },
    });
    closeModal();
  };

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  return (
    <div className="modal">
      <h2>Add Form</h2>
      <form>
        <span onClick={closeModal}>X</span>
        <input
          name="name"
          placeholder="이름"
          value={info.name}
          onChange={inputHandler}
        />
        <input
          name="phone"
          placeholder="010-"
          maxLength={13}
          value={info.phone}
          onChange={inputHandler}
        />
        <button onClick={addHandler}>추가하기</button>
      </form>
    </div>
  );
};

export default AddModal;
