// others
import { AXIOS_INSTANCE } from "../enviroments";
import jsCookie from "js-cookie";

// intercept request
const doAxiosRequestIntercept = () => {
    // const commonApiFields = {
    //   commonHeaderProperties: "Im a test, just delete me",
    // };
    AXIOS_INSTANCE.interceptors.request.use(
        async (config) => {
            const token = await jsCookie.get("token");

            const mConfig = {
                ...config,
                data: {
                    // ...commonApiFields,
                    ...config.data
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            return mConfig;
        },
        (error) => {
            Promise.reject(error);
        }
    );
};

export default doAxiosRequestIntercept;
