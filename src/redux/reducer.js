let initialState = {
    phoneList: [
        { id: 1, name: "테스트 1", phone: "01012341234" },
        { id: 2, name: "테스트 2", phone: "01023452345" },
    ],
    keyword: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INFO":
            return { ...state, phoneList: [...state.phoneList, action.payload.info] };
        case "EDIT_INFO":
            const editPhoneList = state.phoneList.map((item) => {
                if (item.id === action.payload.info.id) {
                    return action.payload.info
                } else {
                    return item
                }
            })
            return { ...state, phoneList: editPhoneList }
        case "DELETE_INFO":
            const deletePhoneList = state.phoneList.filter((item) => item.id !== action.payload.id)
            return { ...state, phoneList: deletePhoneList }
        case "SET_KEYWORD":
            return { ...state, keyword: action.payload.keyword }
        default:
            return state;
    };
};

export default reducer;