import { SET_CURRENT_PAGE, SET_SHOW_BY, SET_USERS } from "./types";

const initialState = {
  users: [],
  currentPage: 1,
  showBy: 20
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case SET_SHOW_BY:
      return { ...state, showBy: action.payload }
    default:
      return state;
  }
}
export default userReducer;