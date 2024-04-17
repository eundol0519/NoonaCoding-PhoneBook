import { useState } from "react";

import { useSelector } from "react-redux";

import "./App.css";

/*
  [유저 스토리]
  - 유저는 연락처를 생성할 수 있다.
  - 연락처에는 이름과 전화번호가 들어간다.
  - 유저는 연락처 리스트를 볼 수 있다.
  - 유저는 이름과 연락처를 검색할 수 있다.
  + 유저는 이름과 연락처를 삭제하거나 수정할 수 있다.
  + (컴포넌트화 시키기 > 검색창, 전화번호부 리스트, 모달창)
*/

function App() {
  const { phoneList } = useSelector((state) => state.phoneList);

  const [searchText, setSearchText] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const inputHandler = (e) => {
    const value = e.target.value;

    setSearchText(value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    alert("검색");
  };

  const addHandler = (e) => {
    e.preventDefault();
    alert("추가");
  };

  return (
    <div className="wrap">
      <h1>Phone Book</h1>
      {phoneList ? (
        <div className="search">
          <input
            placeholder="이름 or 전화번호를 입력해주세요."
            value={searchText}
            onKeyDown={enterHandler}
            onChange={inputHandler}
          />
          <button onClick={searchHandler}>검색</button>
        </div>
      ) : null}
      <div className="list">
        {phoneList ? (
          phoneList.map((item) => {
            return <div>{item.id}</div>;
          })
        ) : (
          <p>등록된 전화번호가 없습니다.😢</p>
        )}
      </div>
      <div className="add" onClick={() => setModalOpen(true)}>
        +
      </div>
      {modalOpen ? (
        <div className="modal">
          <h2>Add Form</h2>
          <form>
            <span onClick={() => setModalOpen(false)}>X</span>
            <input placeholder="이름" />
            <input placeholder="010-" />
            <button onClick={addHandler}>추가하기</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default App;
