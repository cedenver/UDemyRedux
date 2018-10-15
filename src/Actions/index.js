
// Kullanıcı bir event tetiklediğinde veya bir eylem gerçekleştiğinde
// Burası karışlar, Bütün Reducer'lara action gider
// Uygun Reducer ile type eşleşir ise Reducer üzerinde state değişimi gerçekleşir.
// State değişimi de maplenmiş props için ekranda rerender olması anlamına gelir.
export const LibrarySelectedAction = (libraryId) => {
    return {
        type: 'LibrarySelectedActionType',
        payload: libraryId
    };
}