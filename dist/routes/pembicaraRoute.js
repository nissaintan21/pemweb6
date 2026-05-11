"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const pembicaraController_1 = require("../controllers/pembicaraController");
router.get("/", pembicaraController_1.getAllPembicara);
router.post("/", pembicaraController_1.createPembicara);
router.get("/:id", pembicaraController_1.getPembicaraById);
router.put("/:id", pembicaraController_1.updatePembicaraById);
router.delete("/:id", pembicaraController_1.deletePembicaraById);
exports.default = router;
//# sourceMappingURL=pembicaraRoute.js.map