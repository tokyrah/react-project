import axios from "axios";

export const GET_LINKS = "GET_LINKS";

export const getLinks = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3000/links?_sort=id&_order=desc")
            .then((res) => {
                dispatch({ type: GET_LINKS, payload: res.data })
            })
            .catch((err) => console.log(err));
    };
};