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
const UPDATE_ITEM = "UPDATE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

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
    case `${UPDATE_ITEM}_FULFILLED`:
      return { ...state };
    case `${DELETE_ITEM}_FULFILLED`:
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
  product_size,
  product_category,
  product_price,
  product_description,
  product_image
) {
  return {
    type: CREATE_ITEM,
    payload: axios
      .post("/api/product", {
        product_name,
        product_size,
        product_category,
        product_price,
        product_description,
        product_image
      })
      .then(() => console.log("worked"))
      .catch(error => console.log("error in createItem", error))
  };
}

export function updateItem(
  product_id,
  product_name,
  product_size,
  product_category,
  product_price,
  product_description,
  product_image
) {
  return {
    type: UPDATE_ITEM,
    payload: axios
      .put(`/api/product/${product_id}`, {
        product_name,
        product_size,
        product_category,
        product_price,
        product_description,
        product_image
      })
      .then(() => console.log("updateItem worked"))
      .catch(error => console.log("Error in updateItem", error))
  };
}

export function deleteItem(product_id) {
  return {
    type: DELETE_ITEM,
    payload: axios
      .delete(`/api/product/${product_id}`)
      .then(() => console.log("deleteItem worked"))
      .catch(err => console.log("error in deleteItem", err))
  };
}
