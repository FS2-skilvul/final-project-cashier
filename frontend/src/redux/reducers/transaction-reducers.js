import axios from "axios";

const initialState = {
  transactions: [],
  allTransaction: [],
  isLoading: false,
};

function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA_TRANSACTION":
      return {
        ...state,
        isLoading: false,
        transactions: action.payload,
      };
    case "FAILED_GET_DATA_TRANSACTION":
      return {
        ...state,
        isLoading: false,
      };
    case "SUCCESS_GET_ALL_DATA_TRANSACTION":
      return {
        ...state,
        isLoading: false,
        allTransaction: action.payload,
      };
    case "RESET_STATE":
      return {
        ...state,
      };
    default:
      return state;
  }
}

function startFetching() {
  return {
    type: "START_FETCHING",
  };
}

function successGetDataTransaction(data) {
  return {
    type: "SUCCESS_GET_DATA_TRANSACTION",
    payload: data,
  };
}

function failedGetDataTransaction() {
  return {
    type: "FAILED_GET_DATA_TRANSACTION",
  };
}

function successGetAllDataTransaction(data) {
  return {
    type: "SUCCESS_GET_ALL_DATA_TRANSACTION",
    payload: data,
  };
}

export function resetState() {
  return {
    type: "RESET_STATE",
  };
}

export function getDataTransaction() {
  return async function (dispatch) {
    try {
      dispatch(startFetching());
      const token = localStorage.getItem("token");
      if (token) {
        const headers = { Authorization: `Bearer ${token}` }; // auth header with bearer token
        const { data } = await axios.get(
          "https://final-project-cashier-production.up.railway.app/transaction",
          { headers },
        );

        const sortedData = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        dispatch(successGetDataTransaction(sortedData));
      } else {
        dispatch(failedGetDataTransaction());
      }
    } catch (error) {
      // Tangani kesalahan jika ada
      console.error("Error adding user:", error);

      // Dapatkan status code dari error (jika ada)
      const statusCode = error.response ? error.response.status : null;

      // Dapatkan pesan kesalahan dari error (jika ada)
      const errorMessage = error.response ? error.response.data.message : null;

      // Log status code dan pesan kesalahan
      console.log("Status Code:", statusCode);
      console.log("Error Message:", errorMessage);

      dispatch(failedGetDataTransaction());
    }
  };
}

export function getAllDataTransaction(id) {
  return async function (dispatch) {
    try {
      dispatch(startFetching());
      const token = localStorage.getItem("token");
      if (token) {
        const headers = { Authorization: `Bearer ${token}` }; // auth header with bearer token
        const { data } = await axios.get(
          "https://final-project-cashier-production.up.railway.app/transaction",
          { headers },
        );

        const selectedUser = data.data.filter((item) => {
          return item.user_id == id;
        });

        const sortedData = selectedUser.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        dispatch(successGetAllDataTransaction(sortedData));
      } else {
        dispatch(failedGetDataTransaction());
      }
    } catch (error) {
      // Tangani kesalahan jika ada
      console.error("Error adding user:", error);

      // Dapatkan status code dari error (jika ada)
      const statusCode = error.response ? error.response.status : null;

      // Dapatkan pesan kesalahan dari error (jika ada)
      const errorMessage = error.response ? error.response.data.message : null;

      // Log status code dan pesan kesalahan
      console.log("Status Code:", statusCode);
      console.log("Error Message:", errorMessage);

      dispatch(failedGetDataTransaction());
    }
  };
}

export function createDataTransaction(newData) {
  return async function (dispatch) {
    try {
      dispatch(startFetching());
      const token = localStorage.getItem("token");
      if (token) {
        const headers = { Authorization: `Bearer ${token}` }; // auth header with bearer token
        await axios.post(
          "https://final-project-cashier-production.up.railway.app/transaction",
          newData,
          { headers },
        );

        const { data } = await axios.get(
          "https://final-project-cashier-production.up.railway.app/transaction",
          { headers },
        );
        const sortedData = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        dispatch(successGetDataTransaction(sortedData));
      } else {
        dispatch(failedGetDataTransaction());
      }
    } catch (error) {
      // Tangani kesalahan jika ada
      console.error("Error adding user:", error);

      // Dapatkan status code dari error (jika ada)
      const statusCode = error.response ? error.response.status : null;

      // Dapatkan pesan kesalahan dari error (jika ada)
      const errorMessage = error.response ? error.response.data.message : null;

      // Log status code dan pesan kesalahan
      console.log("Status Code:", statusCode);
      console.log("Error Message:", errorMessage);

      dispatch(failedGetDataTransaction());
    }
  };
}

export default transactionReducer;
