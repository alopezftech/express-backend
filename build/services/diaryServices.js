"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntry = exports.deleteEntry = exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
/** En TypeScript, type assertion te permite indicar manualmente el tipo de una variable cuando sabes más que el compilador.
Se usa con la sintaxis as Tipo o <Tipo>. */
/** Evitar la aserción de tipos en TypeScript es importante porque:

Pierdes seguridad de tipos: El compilador confía en ti y no verifica si el valor realmente cumple con el tipo que indicas.

Ocultas errores: Puedes forzar un tipo incorrecto y provocar errores en tiempo de ejecución difíciles de detectar.

Menos mantenible: El código se vuelve menos confiable y más difícil de mantener, especialmente en proyectos grandes.

En general, es mejor dejar que TypeScript infiera los tipos o usar validaciones explícitas para asegurar que los datos cumplen con la estructura esperada.
 */
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (!entry)
        throw new Error(`Diary entry with id ${id} not found`);
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }));
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = (newDiaryEntry) => {
    const newDiary = { id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    };
    diaries.push(newDiary);
    return newDiary;
};
exports.addEntry = addEntry;
const deleteEntry = (id) => {
    const index = diaries.findIndex(d => d.id === id);
    if (index === -1) {
        throw new Error(`Diary entry with id ${id} not found`);
    }
    diaries.splice(index, 1);
};
exports.deleteEntry = deleteEntry;
const updateEntry = (id, updatedDiary) => {
    const index = diaries.findIndex(d => d.id === id);
    if (index === -1) {
        throw new Error(`Diary entry with id ${id} not found`);
    }
    const updatedEntry = {
        id,
        ...updatedDiary,
    };
    diaries[index] = updatedEntry;
    return updatedEntry;
};
exports.updateEntry = updateEntry;
//# sourceMappingURL=diaryServices.js.map