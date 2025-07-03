import axios from "axios"
// const url = "http://localhost:2244/api"
const url  = "https://simpprojectbe.onrender.com"
export const createAccount = async(data:any) => {
    try {
        return await axios.post(`${url}/register`,data).then((res) => {
            console.log(data);
            return res.data
            })
    } catch (error) {
        return error
    }
}

export const LoginAccount = async(data:any) => {
    try {
        return await axios.post(`${url}/login`,data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}

export const readOneUser  = async(userID:string) => {
try {
    return await axios.get(`${url}/read-user${userID}`)
} catch (error) {
    return error
}
}

export const verifyAccount = async(data:any) => {
    try {
        return await axios.patch(`${url}/verify-user`,data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}

export const allUSers = async(data:any) => {
    try {
        return await axios.get(`${url}/users`,data).then((res) => {
            return res.data
        })
    } catch (error) {
        return error
    }
}

export const forgetPasswords = async(data:{}) => {
  try {
    return await axios.post(`${url}/forgot-password`,data).then((res) => {
        return res.data
    })
  } catch (error) {
    return error
  }
}
export const resetPasswords = async(data:any) => {
  try {
     return await axios.patch(`${url}/reset-password`,data).then((res) => {
        return res.data
    })
  } catch (error) {
    return error
  }
}