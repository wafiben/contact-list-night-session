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
      return { ...state, users: action.payload };
    case GET_ONE_USER:
      return { ...state, user: action.payload };
      case  DELETE_USER :return {...state,msg:action.payload};
    default:
      return state;
  }
};
export default Reducer;
