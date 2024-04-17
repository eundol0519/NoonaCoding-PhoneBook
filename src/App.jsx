import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import Search from "./components/Search";
import Card from "./components/Card";

import "./App.css";

/*
  [유저 스토리]
  - 유저는 연락처를 생성할 수 있다.
  - 연락처에는 이름과 전화번호가 들어간다.
  - 유저는 연락처 리스트를 볼 수 있다.
  - 유저는 이름을 검색할 수 있다.
  + 유저는 이름과 연락처를 삭제하거나 수정할 수 있다.
  + (컴포넌트화 시키기 > 검색창, 전화번호부 리스트, 모달창)
*/

function App() {
  const { keyword, phoneList } = useSelector((state) => {
    return { keyword: state.keyword, phoneList: state.phoneList };
  });

  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (keyword) {
      const filterList = phoneList.filter((item) =>
        item.name.includes(keyword),
      );
      setList(filterList);
    } else {
      setList(phoneList);
    }
  }, [keyword, phoneList]);

  return (
    <div className="wrap">
      <h1>Phone Book</h1>
      <Search />
      <div
        className="list"
        style={list.length > 6 ? { overflowY: "scroll" } : undefined}
      >
        <p style={{ textAlign: "left" }}>총 {list.length}개</p>
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Card setModal={setModal} data={item} />
              </React.Fragment>
            );
          })
        ) : (
          <p style={{ marginTop: "50px" }}>등록된 전화번호가 없습니다.😢</p>
        )}
      </div>
      <div
        className="add"
        onClick={() =>
          setModal({
            open: true,
            type: "ADD",
          })
        }
      >
        +
      </div>
      {(() => {
        if (modal.open) {
          switch (modal.type) {
            case "ADD":
              return <AddModal setModal={setModal} />;
            case "EDIT":
              return <EditModal setModal={setModal} data={modal.data} />;
            default:
              return null;
          }
        }
      })()}
    </div>
  );
}

export default App;
