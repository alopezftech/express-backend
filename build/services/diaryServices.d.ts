import type { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../models/types';
/** En TypeScript, type assertion te permite indicar manualmente el tipo de una variable cuando sabes más que el compilador.
Se usa con la sintaxis as Tipo o <Tipo>. */
/** Evitar la aserción de tipos en TypeScript es importante porque:

Pierdes seguridad de tipos: El compilador confía en ti y no verifica si el valor realmente cumple con el tipo que indicas.

Ocultas errores: Puedes forzar un tipo incorrecto y provocar errores en tiempo de ejecución difíciles de detectar.

Menos mantenible: El código se vuelve menos confiable y más difícil de mantener, especialmente en proyectos grandes.

En general, es mejor dejar que TypeScript infiera los tipos o usar validaciones explícitas para asegurar que los datos cumplen con la estructura esperada.
 */
export declare const getEntries: () => DiaryEntry[];
export declare const findById: (id: number) => DiaryEntry;
export declare const getEntriesWithoutSensitiveInfo: () => NonSensitiveDiaryEntry[];
export declare const addEntry: (newDiaryEntry: NewDiaryEntry) => DiaryEntry;
export declare const deleteEntry: (id: number) => void;
export declare const updateEntry: (id: number, updatedDiary: NewDiaryEntry) => DiaryEntry;
//# sourceMappingURL=diaryServices.d.ts.map