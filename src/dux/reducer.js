import axios from "axios";

const INITIAL_STATE = {
  user: null,
  items: []
};

const SET_USER = "SET_USER";
const GET_ITEMS = "GET_ITEMS";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_ITEMS:
      return { ...state, items: action.payload };
    default:
      return { ...state };
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios
      .get("/api/products")
      .then(res => {
        console.log(res.data, "res.data");
        return res.data;
      })
      .catch(error => console.log("error in getItems", error))
  };
}
