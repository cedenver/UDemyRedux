// state ilk uygulama çalıştığında değeri undefined. Bu geri döndüğünde hata verecek.
// bu sebeple state ilk değerini null demeliyiz
export default (state=null, action) =>{
    switch(action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    };
}