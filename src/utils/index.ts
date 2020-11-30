// libs import
import { message } from "antd";

/**
 * default http response callback error
 */
export const defaultHttpResponseCbError = (url: string, err: any) => {
    message.error(`${err}`);
    // eslint-disable-next-line no-console
    console.log("URL：", url);
    // eslint-disable-next-line no-console
    console.log("Detail：", err);
};

export const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export const getBase64Image = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};

export const formatVND = (value: string, currency: string) => {
    return `${parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} ${currency}`;
};

export const beforeUpload = (file: any) => {
    const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};

export const randomColor = () => {
    const listColor = [
        "#ffa39e",
        "#ff7875",
        "#ffbb96",
        "#ff9c6e",
        "#ffc069",
        "#a0d911",
        "#faad14",
        "#52c41a",
        "#389e0d",
        "#13c2c2",
        "#08979c",
        "#1890ff",
        "#096dd9",
        "#597ef7",
        "#10239e",
        "#722ed1",
        "#f759ab"
    ];
    return listColor[Math.floor(Math.random() * listColor.length)];
};
