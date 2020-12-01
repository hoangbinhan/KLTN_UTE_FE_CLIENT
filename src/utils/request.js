// others
import {
    AXIOS_INSTANCE
} from "../configs/enviroments";
import {
    defaultHttpResponseCbError
} from "./index";

const requireParam = (msg) => {
    throw Error(msg);
};

const request = ({
    url = requireParam("Url is undefined"),
    method = "POST",
    payload,
    params,
    cbSuccess,
    cbError = defaultHttpResponseCbError,
    LOADING_ACTION,
    SUCCESS_ACTION,
    ERROR_ACTION
}) => (dispatch) => {
    dispatch({
        type: LOADING_ACTION
    });
    return AXIOS_INSTANCE.request({
            url,
            method,
            data: payload,
            params
        })
        .then((res) => {
            dispatch({
                type: SUCCESS_ACTION,
                payload: res
            });
            if (cbSuccess) {
                cbSuccess({
                    payload: res
                });
            }
        })
        .catch((error) => {
            dispatch({
                type: ERROR_ACTION,
                payload: {
                    error
                }
            });
            if (cbError) cbError(url, error);
        });
};

export default request;