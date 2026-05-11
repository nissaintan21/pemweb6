import { Request, Response } from "express";
import { Category } from "../types/category";
let categories = [];
// GET ALL
export const getAllCategories = (req, res) => {
    res.json(categories);
};
//menyimpan data category baru
export const createCategory = (req, res) => { };
//menampilkan category berdasarkan id
export const getCategoryById = (req, res) => { };
//mengupdate data kategori berdasarkan id
export const updateCategoryById = (req, res) => { };
//menghapjs data cstegory berdasarkannid
export const deleteCategoryById = (req, res) => { };
//# sourceMappingURL=categoryController.js.map