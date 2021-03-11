import Axios from "axios";

const signUp = async (name, email, pass) => {
    Axios({
        method: "POST",
        data: {
            username: name,
            email: email,
            password: pass,
        },
        withCredentials: true,
        url: "http://localhost:4000/api/auth/register",
    }).then((res) => console.log("sign up successful", res));
};

const login = async (email, pass) => {
    Axios({
        method: "POST",
        data: {
            email: email,
            password: pass,
        },
        withCredentials: true,
        url: "http://localhost:4000/api/auth/login",
    }).then((res) => console.log("login successful", res));
};

const getUser = async ({ data, setData }) => {
    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/api/auth/user",
    }).then((res) => {
        setData(res.data);
        console.log(res.data);
    });
};

export default signUp;
export { login, getUser };
