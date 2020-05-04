import { takeEvery, put } from "redux-saga/effects";
import { GET_USER_SUCCESS, GET_USER, GET_USER_FAILURE } from "./actions";

const users = {
  name: "admin",
  pass: "pass"
};

function* getUser() {
  // console.log(users.acc)
  try {
    yield put({ type: GET_USER_SUCCESS, users });
  } catch (error) {
    yield put({ type: GET_USER_FAILURE, error });
  }
}

export default function* userSaga() {
  yield takeEvery(GET_USER, getUser);
}
