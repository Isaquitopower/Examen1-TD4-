/*
import { Request, Response } from "express";

export const getAllPrueba = (_req: Request, res: Response) => {
    res.status(200).json({ message: "hola UNACH" });
};
*/
//hace la solicitud y la peticion, router manda la solicitud hacia controller
import { Request, Response } from "express";

export const getAllUsuarios = (_req: Request, res: Response): void => {
    res.json
(
    [
    { 
        "id": "1",
        "nombre": "Dr. Ana López",
        "Especialidad": "Neurología"
    },
    {
        "id": "2",
        "nombre": "Dr. Juan Osorio",
        "Especialidad": "Traumatologo"
    }
    ]
);
};
