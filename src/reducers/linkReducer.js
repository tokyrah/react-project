import { GET_LINKS } from "../services/linkService";

const initialState = {};

export default function linkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LINKS:
            return action.payload
        default:
            return state;
    }
}