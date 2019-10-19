import axios from "axios";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const SEARCH_USERS_REQUEST = "SEARCH_USERS_REQUEST";
export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
export const SEARCH_USERS_FAILURE = "SEARCH_USERS_FAILURE";
export const USERS_REPO_REQUEST = "USERS_REPO_REQUEST";
export const USERS_REPO_SUCCESS = "USERS_REPO_SUCCESS";
export const USERS_REPO_FAILURE = "USERS_REPO_FAILURE";
export const REQUESTING = "Requesting";
export const SUCCESS = "Success";
export const ERROR = "Error";
export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
    status: REQUESTING
  };
}
export function getUsersSuccess(userDetails) {
  return {
    type: GET_USERS_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: ERROR,
    error
  };
}
export function getUsers() {
  return async (dispatch, getState) => {
    dispatch(getUsersRequest());
    try {
      const result = await axios.get(`http://api.github.com/users`);
      const resultJson = result;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getUsersSuccess(resultJson.data));
    } catch (e) {
      dispatch(getUsersFailure(e.message));
    }
  };
}
export function searchUsersRequest() {
  return {
    type: SEARCH_USERS_REQUEST,
    status: REQUESTING
  };
}
export function searchUsersSuccess(userDetails) {
  return {
    type: SEARCH_USERS_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
export function searchUsersFailure(error) {
  return {
    type: SEARCH_USERS_FAILURE,
    status: ERROR,
    error
  };
}
export function searchUsers(user) {
  return async (dispatch, getState) => {
    dispatch(searchUsersRequest());
    try {
      const result = await axios.get(
        `http://api.github.com/search/users?q=${user}`
      );
      const resultJson = result;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(searchUsersSuccess(resultJson.data));
    } catch (e) {
      dispatch(searchUsersFailure(e.message));
    }
  };
}
export function usersRepoRequest() {
  return {
    type: USERS_REPO_REQUEST,
    status: REQUESTING
  };
}
export function usersRepoSuccess(userDetails) {
  return {
    type: USERS_REPO_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}
export function usersRepoFailure(error) {
  return {
    type: USERS_REPO_FAILURE,
    status: ERROR,
    error
  };
}
export function searchUserRepo(user) {
  return async (dispatch, getState) => {
    dispatch(usersRepoRequest());
    try {
      const result = await axios.get(
        `http://api.github.com/search/topics${user}/repos`
      );
      const resultJson = result;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(usersRepoSuccess(resultJson.data));
    } catch (e) {
      dispatch(usersRepoFailure(e.message));
    }
  };
}
