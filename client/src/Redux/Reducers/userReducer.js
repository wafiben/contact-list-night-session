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
    case GET_ALL_USERS:
      return {
        ...state,
        msg: action.payload.msg,
        users: action.payload.userFromRes,
      
      };
    case GET_ONE_USER:
      return { ...state, user: action.payload };
    case DELETE_USER:
      return { ...state, msg: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        msg: action.payload.msg,
        user: action.payload.updatedUser,
      };
    case ADD_USER:
      return { ...state, msg: action.payload.msg, user: action.payload.user };
    default:
      return state;
  }
};
export default Reducer;
