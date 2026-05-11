"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePembicaraById = exports.updatePembicaraById = exports.getPembicaraById = exports.createPembicara = exports.getAllPembicara = void 0;
let pembicara = [];
// GET ALL
const getAllPembicara = (req, res) => {
    res.json(pembicara);
};
exports.getAllPembicara = getAllPembicara;
//menyimpan data pembicara baru
const createPembicara = (req, res) => { };
exports.createPembicara = createPembicara;
//menampilkan pembicara berdasarkan id
const getPembicaraById = (req, res) => { };
exports.getPembicaraById = getPembicaraById;
//mengupdate data pembicara berdasarkan id
const updatePembicaraById = (req, res) => { };
exports.updatePembicaraById = updatePembicaraById;
//menghapus data pembicara berdasarkan id
const deletePembicaraById = (req, res) => { };
exports.deletePembicaraById = deletePembicaraById;
//# sourceMappingURL=pembicaraController.js.map