import { Request, Response } from "express";
import { Category } from "../types/category";

let categories: Category[] = [];

// GET ALL
export const getAllCategories = (req: Request, res: Response) => {
  res.json(categories);
};
//menyimpan data category baru
export const createCategory=(req:Request,res:Response)=>{};

//menampilkan category berdasarkan id
export const getCategoryById=(req:Request,res:Response)=>{};

//mengupdate data kategori berdasarkan id
export const updateCategoryById=(req:Request,res:Response)=>{};
//menghapjs data cstegory berdasarkannid
export const deleteCategoryById=(req:Request,res:Response)=>{};
