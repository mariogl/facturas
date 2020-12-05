const { createStore } = require("@reduxjs/toolkit");

const reducer = (state = { titulo: "" }, action) => {
    switch (action.type) {
        case "setTitulo":
            return { ...state, titulo: action.payload }
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;