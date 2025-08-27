"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const validations_1 = __importDefault(require("../validations"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    return diary != null ? res.send(diary) : res.sendStatus(404);
});
router.post("/", (req, res) => {
    try {
        const newDiaryEntry = (0, validations_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.put("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const parsedEntry = (0, validations_1.default)(req.body);
        const updatedDiary = diaryServices.updateEntry(id, parsedEntry);
        res.json(updatedDiary);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const diary = diaryServices.findById(id);
    if (!diary) {
        return res.status(404).send({ error: "Diary not found" });
    }
    diaryServices.deleteEntry(id);
    return res.status(204).end();
});
exports.default = router;
//# sourceMappingURL=diaries.js.map