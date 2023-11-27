import axios from "axios"

const initialState = {
    users: [],
    isLoading: false,
    isEmailExist: false,
    isSuccess: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_ADD_USER":
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case "FAILED_ADD_USER":
            return {
                ...state,
                isLoading: false,
                isEmailExist: true
            }
        default: return state
    }
}

function startFetching() {
    return {
        type: "START_FETCHING"
    }
}

function successAddUser() {
    return {
        type: "SUCCESS_ADD_USER"
    }
}

function emailAlreadyRegistered() {
    return {
        type: "FAILED_ADD_USER"
    }
}

export function getTodo() {
    return async function (dispatch) {
        dispatch(startFetching())

        const { data } = await axios("https://final-project-cashier-production.up.railway.app")

        dispatch(successGetTodo(data))
    }
}


export function addUser(newUser) {
    return async function (dispatch) {
        try {
            dispatch(startFetching())
            const response = await axios.post("https://final-project-cashier-production.up.railway.app/auth/regis", newUser)

            const { data } = response;
            console.log(data)

            dispatch(successAddUser());
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

            if (statusCode === 400) {
                dispatch(emailAlreadyRegistered());
            }
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

export function editTodo(id, value) {
    return async function (dispatch) {
        dispatch(startFetching())
        await axios.put(`https://final-project-cashier-production.up.railway.app/${id}`, { value })

        const { data } = await axios("https://final-project-cashier-production.up.railway.app")
        dispatch(successGetTodo(data))
    }
}

export function deleteTodo(id) {
    return async function (dispatch) {
        dispatch(startFetching())
        await axios.delete(`https://final-project-cashier-production.up.railway.app/${id}`)

        const { data } = await axios("https://final-project-cashier-production.up.railway.app")
        dispatch(successGetTodo(data))
    }
}

export default userReducer;