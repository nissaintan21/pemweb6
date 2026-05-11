"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.createCategory = exports.getAllCategories = void 0;
let categories = [];
// GET ALL
const getAllCategories = (req, res) => {
    res.json(categories);
};
exports.getAllCategories = getAllCategories;
//menyimpan data category baru
const createCategory = (req, res) => { };
exports.createCategory = createCategory;
//menampilkan category berdasarkan id
const getCategoryById = (req, res) => { };
exports.getCategoryById = getCategoryById;
//mengupdate data kategori berdasarkan id
const updateCategoryById = (req, res) => { };
exports.updateCategoryById = updateCategoryById;
//menghapjs data cstegory berdasarkannid
const deleteCategoryById = (req, res) => { };
exports.deleteCategoryById = deleteCategoryById;
//# sourceMappingURL=categoryController.js.map