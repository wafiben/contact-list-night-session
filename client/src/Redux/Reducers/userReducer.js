import {
  GET_ALL_USERS,
  GET_ONE_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../types.js";
const initState = { users: [], user: null, msg: "", error: "" };

const Reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default Reducer;
