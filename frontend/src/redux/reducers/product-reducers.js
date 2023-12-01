import axios from "axios"


const initialState = {
    products: [],
    productById: {},
    isLoading: false,
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_GET_DATA_PRODUCT":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            }
        case "FAILED_GET_DATA_PRODUCT":
            return {
                ...state,
                isLoading: false
            }
        case "SUCCESS_GET_DATA_PRODUCT_BY_ID":
            return {
                ...state,
                isLoading: false,
                productById: action.payload,
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

function successGetDataProduct(data) {
    return {
        type: "SUCCESS_GET_DATA_PRODUCT",
        payload: data
    }
}

function failedGetDataProduct() {
    return {
        type: "FAILED_GET_DATA_PRODUCT",
    }
}

function successGetDataProductById(data) {
    return {
        type: "SUCCESS_GET_DATA_PRODUCT_BY_ID",
        payload: data
    }
}

export function resetState() {
    return {
        type: "RESET_STATE"
    }
}

export function getDataProduct() {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/product', { headers })

                const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                dispatch(successGetDataProduct(sortedData));
            } else {
                dispatch(failedGetDataProduct())
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

            dispatch(failedGetDataProduct());
        }
    }
}

export function addDataProduct(newData) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                await axios.post('https://final-project-cashier-production.up.railway.app/product', newData, { headers })

                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/product', { headers })
                const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                dispatch(successGetDataProduct(sortedData));
            } else {
                dispatch(failedGetDataProduct())
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

            dispatch(failedGetDataProduct());
        }
    }
}

export function getDataProductById(id) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get(`https://final-project-cashier-production.up.railway.app/product/${id}`, { headers })

                // console.log(login.data.token, data.data.nama)
                // console.log(data.data)
                dispatch(successGetDataProductById(data.data));
            } else {
                dispatch(failedGetDataProduct())
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

            dispatch(failedGetDataProduct());
        }
    }
}

export function editDataProductById(id, newData) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                await axios.put(`https://final-project-cashier-production.up.railway.app/product/${id}`, newData, { headers })

                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/product', { headers })
                const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                dispatch(successGetDataProduct(sortedData));
            } else {
                dispatch(failedGetDataProduct())
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

            dispatch(failedGetDataProduct());
        }
    }
}

export function deleteDataProduct(id) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                await axios.delete(`https://final-project-cashier-production.up.railway.app/product/${id}`, { headers })

                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/product', { headers })
                const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                dispatch(successGetDataProduct(sortedData));
            } else {
                dispatch(failedGetDataProduct())
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

            dispatch(failedGetDataProduct());
        }
    }
}

export default productReducer;