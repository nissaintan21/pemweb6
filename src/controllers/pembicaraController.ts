import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara";

let pembicara: Pembicara[] = [];

// GET ALL
export const getAllPembicara = (req: Request, res: Response) => {
  res.json(pembicara);
};
//menyimpan data pembicara baru
export const createPembicara=(req:Request,res:Response)=>{};

//menampilkan pembicara berdasarkan id
export const getPembicaraById=(req:Request,res:Response)=>{};

//mengupdate data pembicara berdasarkan id
export const updatePembicaraById=(req:Request,res:Response)=>{};

//menghapus data pembicara berdasarkan id
export const deletePembicaraById=(req:Request,res:Response)=>{};