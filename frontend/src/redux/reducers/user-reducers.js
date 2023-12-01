import axios from 'axios';

const initialState = {
    userSelf: [],
    users: [],
    productUsers: [],
    isLoading: false,
    isEmailExist: false,
    isSuccess: false,
    isLoginSuccess: true,
    isMovePage: false,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_REGISTER_USER":
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case "FAILED_REGISTER_USER":
            return {
                ...state,
                isLoading: false,
                isEmailExist: true
            }
        case "SUCCESS_LOGIN_USER":
            return {
                ...state,
                isLoading: false,
                userSelf: action.payload,
                isMovePage: true,
            }
        case "FAILED_LOGIN_USER":
            return {
                ...state,
                isLoading: false,
                isLoginSuccess: false
            }
        case "SUCCESS_GET_DATA_USER":
            return {
                ...state,
                isLoading: false,
                userSelf: action.payload,
            }
        case "FAILED_GET_DATA_USER":
            return {
                ...state,
                isLoading: false
            }
        case "SUCCESS_GET_ALL_DATA_USER":
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            }
        case "SUCCESS_GET_PRODUCT_DATA_USER":
            return {
                ...state,
                isLoading: false,
                productUsers: action.payload,
            }
        case "RESET_STATE":
            return {
                ...state,
                isLoading: false,
                isEmailExist: false,
                isSuccess: false,
                isLoginSuccess: true,
                isMovePage: false,
            }
        default: return state
    }
}

function startFetching() {
    return {
        type: 'START_FETCHING',
    };
}

function successRegisterUser() {
    return {
        type: 'SUCCESS_REGISTER_USER',
    };
}

function emailAlreadyRegistered() {
    return {
        type: 'FAILED_REGISTER_USER',
    };
}

function successLoginUser(getUser) {
    return {
        type: 'SUCCESS_LOGIN_USER',
        payload: getUser,
    };
}

function failedLoginUser() {
    return {
        type: 'FAILED_LOGIN_USER',
    };
}

function successGetDataUser(data) {
    return {
        type: "SUCCESS_GET_DATA_USER",
        payload: data
    }
}

function failedGetDataUser() {
    return {
        type: "FAILED_GET_DATA_USER"
    }
}

function successGetAllDataUser(data) {
    return {
        type: "SUCCESS_GET_ALL_DATA_USER",
        payload: data
    }
}

function successGetProductDataUser(data) {
    return {
        type: "SUCCESS_GET_PRODUCT_DATA_USER",
        payload: data
    }
}

export function resetState() {
    return {
        type: 'RESET_STATE',
    };
}

// export function getTodo() {
//     return async function (dispatch) {
//         dispatch(startFetching())

//         const { data } = await axios("https://final-project-cashier-production.up.railway.app")

//         dispatch(successGetTodo(data))
//     }
// }

export function loginUser(dataUser) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const login = await axios.post("https://final-project-cashier-production.up.railway.app/auth/login", dataUser)

            if (login.data.token) {
                localStorage.setItem('token', login.data.token)

                const headers = { 'Authorization': `Bearer ${login.data.token}` }; // auth header with bearer token
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/user/self', { headers })

                // console.log(login.data.token, data.data.nama)
                dispatch(successLoginUser(data.data));
            } else {
                dispatch(failedLoginUser())
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

            dispatch(failedLoginUser());
        }
    }
}

export function registerUser(newUser) {
    return async function (dispatch) {
        try {
            dispatch(startFetching());
            const response = await axios.post(
                'https://final-project-cashier-production.up.railway.app/auth/regis',
                newUser,
            );

            dispatch(successRegisterUser());
        } catch (error) {
            // Tangani kesalahan jika ada
            console.error('Error adding user:', error);

            // Dapatkan status code dari error (jika ada)
            const statusCode = error.response ? error.response.status : null;

            // Dapatkan pesan kesalahan dari error (jika ada)
            const errorMessage = error.response ? error.response.data.message : null;

            // Log status code dan pesan kesalahan
            console.log('Status Code:', statusCode);
            console.log('Error Message:', errorMessage);

            if (statusCode === 400) {
                dispatch(emailAlreadyRegistered());
            }
        }
    };
}

export function getDataUser() {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/user/self', { headers })

                // console.log(login.data.token, data.data.nama)
                dispatch(successGetDataUser(data.data));
            } else {
                dispatch(failedGetDataUser())
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

            dispatch(failedGetDataUser());
        }
    }
}

export function getAllDataUser() {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/user', { headers })

                dispatch(successGetAllDataUser(data.data));
            } else {
                dispatch(failedGetDataUser())
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

            dispatch(failedGetDataUser());
        }
    }
}

export function getDataProductUserById(id) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                const { data } = await axios.get(`https://final-project-cashier-production.up.railway.app/user`, { headers })

                const selectedUser = data.data.filter((item) => {
                    return (
                        item.id == id
                    );
                });

                dispatch(successGetProductDataUser(selectedUser[0].Products));
            } else {
                dispatch(failedGetDataUser())
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

            dispatch(failedGetDataUser());
        }
    }
}

export function updateDataUser(newData) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const token = localStorage.getItem('token')
            if (token) {
                const headers = { 'Authorization': `Bearer ${token}` }; // auth header with bearer token
                // --- error disini ----
                await axios.put('https://final-project-cashier-production.up.railway.app/user/userSelf', newData, { headers })
                // ---------------------
                const { data } = await axios.get('https://final-project-cashier-production.up.railway.app/user/self', newData, { headers })
                // console.log(login.data.token, data.data.nama)
                dispatch(successGetDataUser(data.data));
            } else {
                dispatch(failedGetDataUser())
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

            dispatch(failedGetDataUser());
        }
    }
}

// export function centangTodo(id, completed) {
//     return async function (dispatch) {
//         dispatch(startFetching())
//         await axios.put(`https://final-project-cashier-production.up.railway.app/${id}`, { completed })

//         const { data } = await axios("https://final-project-cashier-production.up.railway.app")
//         dispatch(successGetTodo(data))
//     }
// }

// export function editTodo(id, value) {
//     return async function (dispatch) {
//         dispatch(startFetching())
//         await axios.put(`https://final-project-cashier-production.up.railway.app/${id}`, { value })

//         const { data } = await axios("https://final-project-cashier-production.up.railway.app")
//         dispatch(successGetTodo(data))
//     }
// }

// export function deleteTodo(id) {
//     return async function (dispatch) {
//         dispatch(startFetching())
//         await axios.delete(`https://final-project-cashier-production.up.railway.app/${id}`)

//         const { data } = await axios("https://final-project-cashier-production.up.railway.app")
//         dispatch(successGetTodo(data))
//     }
// }

export default userReducer;
