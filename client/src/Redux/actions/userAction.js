import {
  GET_ALL_USERS,
  GET_ONE_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../types";
import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:7000/api");
    const userFromRes = res.data.users;
    dispatch({ type: GET_ALL_USERS, payload: userFromRes });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:7000/api/${id}`);
    const message = res.data.msg;
    console.log(res);
    dispatch({ type: DELETE_USER, payload: message });
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = () => async (dispatch) => {};

export const getOneUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:7000/api/${id}`);
    const foundUser = res.data.user;
    dispatch({ type: GET_ONE_USER, payload: foundUser });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = () => async (dispatch) => {};
