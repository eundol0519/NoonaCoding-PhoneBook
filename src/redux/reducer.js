let intialState = {
    phoneList: [],
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "add":
            const newPhoneList = state.push(action.payload.phone);
            return { ...state, phoneList: newPhoneList };
        case "edit":
            // id, 새로운 이름과 연락처 받아와서 수정
            return { ...state, phoneList: newPhoneList };
        case "delete":
            // id 값 받아와서 filter 사용해서 삭제
            return { ...state, phoneList: newPhoneList };
        default:
            return state;
    };
};

export default reducer