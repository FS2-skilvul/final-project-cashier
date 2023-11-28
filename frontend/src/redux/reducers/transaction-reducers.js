import axios from "axios"


const initialState = {
    transactions: [],
    isLoading: false,
}

function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_GET_DATA_TRANSACTION":
            return {
                ...state,
                isLoading: false,
                transactions: action.payload,
            }
        case "FAILED_GET_DATA_TRANSACTION":
            return {
                ...state,
                isLoading: false
            }
        case "RESET_STATE":
            return {
                ...state,
            }
        default: return state
    }
}

function startFetching() {
    return {
        type: "START_FETCHING"
    }
}

function successGetDataTransaction(data) {
    return {
        type: "SUCCESS_GET_DATA_TRANSACTION",
        payload: data
    }
}

function failedGetDataTransaction() {
    return {
        type: "FAILED_GET_DATA_TRANSACTION",
    }
}

export function resetState() {
    return {
        type: "RESET_STATE"
    }
}

export function getDataTransaction() {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/transaction', { headers })

                // console.log(login.data.token, data.data.nama)
                // console.log(data.data)
                dispatch(successGetDataTransaction(data.data));
            } else {
                dispatch(failedGetDataTransaction())
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
    }
}

export default transactionReducer;