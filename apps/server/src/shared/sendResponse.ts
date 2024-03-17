import { Response } from "express";

type IApiResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string | null;
    meta?: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const responseData: IApiResponse<T> = {
        success: data.success,
        statusCode: data.statusCode,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
    };

    res.status(data.statusCode).json(responseData);
};

export default sendResponse;