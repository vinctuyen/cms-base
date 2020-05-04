import { GET_USER_SUCCESS, GET_USER, GET_USER_FAILURE } from "./LoginAction";

let user_init = {
  users: {
    name: "",
    pass: ""
  },
  loadingUser: false,
  error: null
};

function userStoreReducer(state = user_init, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loadingUser: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
        loadingUser: false
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingUser: false
      };
    default:
      return state;
  }
}

export default userStoreReducer;
