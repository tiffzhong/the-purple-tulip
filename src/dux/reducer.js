import axios from "axios";

const INITIAL_STATE = {
  user: null,
  items: [],
  item: [],
  inqs: [],
  inq: [],
  weddings: [],
  wedding: []
};

const SET_USER = "SET_USER";
const GET_ITEMS = "GET_ITEMS";
const GET_ITEM = "GET_ITEM";
const CREATE_ITEM = "CREATE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const GET_INQURIES = "GET_INQURIES";
const GET_INQUIRY = "GET_INQUIRY";
const GET_WEDDINGS = "GET_WEDDINGS";
const GET_WEDDING = "GET_WEDDING";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case `${GET_ITEMS}_FULFILLED`:
      return { ...state, items: action.payload };
    case GET_ITEM:
      return { ...state, item: action.payload };
    case `${CREATE_ITEM}_FULFILLED`:
      return { ...state };
    case `${UPDATE_ITEM}_FULFILLED`:
      return { ...state };
    case `${DELETE_ITEM}_FULFILLED`:
      return { ...state };
    case `${GET_INQURIES}_FULFILLED`:
      return { ...state, inqs: action.payload };
    case GET_INQUIRY:
      return { ...state, inq: action.payload };
    case `${GET_WEDDINGS}_FULFILLED`:
      return { ...state, weddings: action.payload };
    case GET_WEDDING:
      return { ...state, wedding: action.payload };
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
        // console.log(res.data, "res.data");
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
  id,
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
      .put(`/api/product/${id}`, {
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

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: axios
      .delete(`/api/product/${id}`)
      .then(() => console.log("deleteItem worked"))
      .catch(err => console.log("error in deleteItem", err))
  };
}

export function getInqs() {
  return {
    type: GET_INQURIES,
    payload: axios
      .get("/admin/inquiries")
      .then(res => {
        return res.data;
      })
      .catch(error => console.log("error in getItems", error))
  };
}

export function getInq(id) {
  return {
    type: GET_INQUIRY,
    payload: id
  };
}

export function getWeddings() {
  return {
    type: GET_WEDDINGS,
    payload: axios
      .get("/admin/weddings")
      .then(res => {
        return res.data;
      })
      .catch(error => console.log("error in getWeddings", error))
  };
}

export function getWedding(id) {
  return {
    type: GET_WEDDING,
    payload: id
  };
}
