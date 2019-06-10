import axios from "axios";

const INITIAL_STATE = {
  user: null,
  items: [],
  item: []
};

const SET_USER = "SET_USER";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEM = "GET_ITEM";
const CREATE_ITEM = "CREATE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case `${GET_ITEMS}_FULFILLED`:
      return { ...state, items: action.payload };
    case `${GET_ITEM}_FULFILLED`:
      return { ...state, item: action.payload };
    case `${CREATE_ITEM}_FULFILLED`:
      return { ...state };
    case `${DELETE_ITEM}_FULFILLED`:
      return { ...state };
    case `${EDIT_ITEM}_FULFILLED`:
      return { ...state };
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
export function getItem(id) {
  return {
    type: GET_ITEM,
    payload: id
  };
}

export function createItem(
  product_name,
  product_image,
  product_size,
  product_category,
  product_description,
  product_price
) {
  return {
    type: axios
      .post("/api/product", {
        product_name,
        product_image,
        product_size,
        product_category,
        product_description,
        product_price
      })
      .then(() => (window.location.pathname = "/admin/home"))
      .catch(error => console.log("error in createItem", error))
  };
}
