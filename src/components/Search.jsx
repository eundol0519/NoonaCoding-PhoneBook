import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState();

  const inputHandler = (e) => {
    const value = e.target.value;

    setKeyword(value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    dispatch({ type: "SET_KEYWORD", payload: { keyword: keyword } });
  };

  return (
    <div className="search">
      <input
        name="keyword"
        placeholder="이름을 입력해주세요."
        value={keyword}
        onKeyDown={enterHandler}
        onChange={inputHandler}
      />
      <button onClick={searchHandler}>검색</button>
    </div>
  );
};

export default Search;
