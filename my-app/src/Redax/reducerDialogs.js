const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE';
const ADD_LETTER_MESSAGE = 'ADD-LETTER-MESSAGE';
let initialState = {
    dataMessage: [
        {id: 1, message : 'hey'        },
        {id: 2, message : 'How'        },
        {id: 3, message : 'comon'      },
        {id: 4, message : 'say goodbay'},
        {id: 5, message : 'hello'      }
    ],
    areyMessage: 'Hello',
 
    dataName: [
    {id :'1', name: 'Alena',  url: 'https://lh3.googleusercontent.com/proxy/F9VkXOmchTz3Xy1AYllDI_Jwww2G-btEQ1yiHrexEreXRGDCsCisA1rxby2KJZv0tIAUOm1pzvU6-El51qp_9H9Y4oswU5bD9VgDFibJFWj62rdDLLzke2ZiE0XHeQ'}, 
    {id :'2', name: 'Oleg',   url:'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1zMzEtZHNjMTU1NDk0Ny0xLnBuZw.png?s=OLRx178uii5wRlKSXfiGLhqr_Hqktr_cSLn_-N3HCOE' },
    {id :'3', name: 'Petr',   url:'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png' }, 
    {id :'4', name: 'Dima',   url: 'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png' }, 
    {id :'5', name: 'Sveta',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSaFdOJTbPN8sFugUETbQEY45YyDej0q-2g&usqp=CAU'}, 
    {id :'6', name: 'Victor', url: 'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png'},
    ]
}   
const reducerDialogs = ( state = initialState, action) => {
    
    
    switch (action.type) {
        case ADD_POST_MESSAGE : 
            return{
                ...state, 
                dataMessage: [...state.dataMessage,{id: 6, message : state.areyMessage}],
                areyMessage: '' 
            }
        
        case ADD_LETTER_MESSAGE :
            return{
            ...state,
            areyMessage: action.newText
            }
        
        default:
            return state;
        
    }
};
export const addNewPostMessageAction = () => {
    return {
      type : ADD_POST_MESSAGE
    };
};
export const addNewLetterMessageAction = (text) => {
    return {
      type : ADD_LETTER_MESSAGE, 
      newText : text
    };
};

export default reducerDialogs;