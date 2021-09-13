import { REFRESH, SET_CURRENT_PAGE, SET_CURRENT_USER, SET_FILTERED_USERS, SET_SHOW_BY, SET_USERS } from "./types";

const initialState = {
  users: [],
  filteredUsers: [],
  currentPage: 1,
  showBy: 20,
  currentUser: {}
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload, filteredUsers: action.payload }
    case SET_CURRENT_PAGE:      
      return { ...state, currentPage: action.payload }
    case SET_SHOW_BY:
      return { ...state, showBy: action.payload }
    case SET_FILTERED_USERS:
      return { ...state, filteredUsers: action.payload }
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case REFRESH:
      return { ...state, filteredUsers: state.users, showBy: 20 }
    default:
      return state;
  }
}
export default userReducer;