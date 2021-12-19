import { Request, Response } from "express";
import { base_datos } from "../index";

export async function listMenu(req: Request, res: Response) {
    try {
        let snapshot = await base_datos.collection("menu").get();
        return res.status(200).json(snapshot.docs);
    } catch (err) {
        return handleError(res, err);
    }
};

function handleError(res: Response, err:any){
    return res.status(500).send({message: `${err.code} - ${err.message}`});
}