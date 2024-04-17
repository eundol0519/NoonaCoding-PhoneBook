import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EditModal = ({ setModal, data }) => {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({ name: "", phone: "" });

  useEffect(() => {
    if (data.id) {
      setInfo({ name: data.name, phone: data.phone });
    }
  }, [data]);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    setInfo({ name: "", phone: "" });
    dispatch({
      type: "EDIT_INFO",
      payload: {
        info: {
          ...info,
          id: data.id,
        },
      },
    });
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Edit Form</h2>
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
        <button onClick={editHandler}>수정하기</button>
      </form>
    </div>
  );
};

export default EditModal;
