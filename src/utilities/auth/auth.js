import Axios from "axios";

const register = async (name, pass) => {
    Axios({
        method: "POST",
        data: {
            username: name,
            password: pass,
        },
        withCredentials: true,
        url: "http://localhost:4000/api/auth/register",
    }).then((res) => console.log(res));
};

const login = async (name, pass) => {
    Axios({
        method: "POST",
        data: {
            username: name,
            password: pass,
        },
        withCredentials: true,
        url: "http://localhost:4000/api/auth/login",
    }).then((res) => console.log(res));
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

export default register;
export { login, getUser };
