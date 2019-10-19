import * as userAction from "../actions/user.action.js";
const user = (
  state = {
    status: null,
    loading: false,
    error: null,
    userDetails: null,
    repoDetails: null,
    user: null,
    repoLoader: false
  },
  action
) => {
  switch (action.type) {
    case userAction.GET_USERS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case userAction.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        userDetails: action.userDetails,
        status: action.status,
        loading: false
      });
    case userAction.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case userAction.SEARCH_USERS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case userAction.SEARCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        user: action.userDetails && action.userDetails.items,
        status: action.status,
        loading: false
      });
    case userAction.SEARCH_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case userAction.USERS_REPO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        repoLoader: true
      });
    case userAction.USERS_REPO_SUCCESS:
      return Object.assign({}, state, {
        repoDetails: action.userDetails,
        status: action.status,
        repoLoader: false
      });
    case userAction.USERS_REPO_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};
export default user;
