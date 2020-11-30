// types
import { REQUEST_TYPE } from "../types/common";
import { DISPATCH_TYPE } from "../configs/Redux/store";
// others
import { AXIOS_INSTANCE } from "../configs/enviroments";
import { defaultHttpResponseCbError } from "../utils";

const requireParam = (msg: string) => {
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
}: REQUEST_TYPE) => (dispatch: DISPATCH_TYPE) => {
    dispatch({
        type: LOADING_ACTION
    });
    return AXIOS_INSTANCE.request({
        url,
        method,
        data: payload,
        params
    })
        .then((res: { [key: string]: any }) => {
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
        .catch((error: { [key: string]: any }) => {
            dispatch({
                type: ERROR_ACTION,
                payload: { error }
            });
            if (cbError) cbError(url, error);
        });
};

export default request;
