import { Request, Response } from "express";
export declare class PostController {
    store(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
