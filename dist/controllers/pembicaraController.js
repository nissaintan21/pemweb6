import { Request, Response } from "express";
import { Pembicara } from "../types/pembicara";
let pembicara = [];
// GET ALL
export const getAllPembicara = (req, res) => {
    res.json(pembicara);
};
//menyimpan data pembicara baru
export const createPembicara = (req, res) => { };
//menampilkan pembicara berdasarkan id
export const getPembicaraById = (req, res) => { };
//mengupdate data pembicara berdasarkan id
export const updatePembicaraById = (req, res) => { };
//menghapus data pembicara berdasarkan id
export const deletePembicaraById = (req, res) => { };
//# sourceMappingURL=pembicaraController.js.map