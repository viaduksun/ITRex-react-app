import getUsers from "../../api/getUsers";
import { REFRESH, SET_CURRENT_PAGE, SET_CURRENT_USER, SET_FILTERED_USERS, SET_SHOW_BY, SET_USERS } from "./types";

export const setUsersAction = () => (dispatch) => {
  getUsers().then((data) => {
    console.log(data);
    // const users = data.data.sort((a, b) => {
    //   if (a.id > b.id) {
    //     return 1;
    //   }
    //   if (a.id < b.id) {
    //     return -1;
    //   }
    //   return 0;
    // })
    dispatch({
      type: SET_USERS,
      payload: data.data
    })
  })
}
export const setCurrentPageAction = (data) => ({
  type: SET_CURRENT_PAGE,
  payload: data
})
export const setShowByAction = (data) => ({
  type: SET_SHOW_BY,
  payload: data
})
export const setFilteredUsersAction = (users) => ({
  type: SET_FILTERED_USERS,
  payload: users
})
export const refreshAction = () => ({
  type: REFRESH,
})
export const setCurrentUserAction = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})