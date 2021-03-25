import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";

// const ADD_NEW_POST = 'ADD-NEW-POST';
// const ADD_NEW_LETTER = 'ADD-NEW-LETTER';

// const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE';
// const ADD_LETTER_MESSAGE = 'ADD-LETTER-MESSAGE';
let store = {
    _state: {
        allPos: {
            dataArey: 'dgvdfv',
            dataPost: [
                { id: 1, messages : "Hello",      likeCount: 5  },
                { id: 2, messages : "How are you", likeCount: 4 },
                { id: 3, messages : "I am fine", likeCount: 6   },
                { id: 4, messages : "I love react", likeCount: 9}
            ]
        },
        dataName: [
            {id :'1', name: 'Alena',  url: 'https://lh3.googleusercontent.com/proxy/F9VkXOmchTz3Xy1AYllDI_Jwww2G-btEQ1yiHrexEreXRGDCsCisA1rxby2KJZv0tIAUOm1pzvU6-El51qp_9H9Y4oswU5bD9VgDFibJFWj62rdDLLzke2ZiE0XHeQ'}, 
            {id :'2', name: 'Oleg',   url:'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1zMzEtZHNjMTU1NDk0Ny0xLnBuZw.png?s=OLRx178uii5wRlKSXfiGLhqr_Hqktr_cSLn_-N3HCOE' },
            {id :'3', name: 'Petr',   url:'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png' }, 
            {id :'4', name: 'Dima',   url: 'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png' }, 
            {id :'5', name: 'Sveta',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSaFdOJTbPN8sFugUETbQEY45YyDej0q-2g&usqp=CAU'}, 
            {id :'6', name: 'Victor', url: 'https://www.vhv.rs/dpng/d/155-1558328_man-thinking-png-man-images-free-download-transparent.png'},
        ],
        allMessage: {
            dataMessage: [
                {id: 1, message : 'hey'        },
                {id: 2, message : 'How'        },
                {id: 3, message : 'comon'      },
                {id: 4, message : 'say goodbay'},
                {id: 5, message : 'hello'      }
            ],
            areyMessage: 'Hello'
        },        
        dataSideBar: [
            {id :'1', name: 'Sveta',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSaFdOJTbPN8sFugUETbQEY45YyDej0q-2g&usqp=CAU'}, 
            {id :'2', name: 'Sveta',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSaFdOJTbPN8sFugUETbQEY45YyDej0q-2g&usqp=CAU' },
            {id :'3', name: 'Sveta',  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSaFdOJTbPN8sFugUETbQEY45YyDej0q-2g&usqp=CAU' }, 
        ]
    },
    
    sucscriber(observer) {
        this._entairRender = observer;
    },

    _entairRender() {

    },
    getState(){
        return this._state;
    },
    
    dispatch(action){
        reducerProfile(this._state.allPost, action);
        reducerDialogs(this._state.allMessage, action);
        reducerProfile(this._state.dataSideBar, action);
        this._entairRender(this._state); 

        //if(action.type === ADD_NEW_POST){
        //     this._state.allPost.dataPost.push({ id: 5, messages: this._state.allPost.dataArey, likeCount: 0 });
        //     this._state.allPost.dataArey = '';
        //     this._entairRender(this._state);
        // } else if(action.type === ADD_NEW_LETTER){
        //     this._state.allPost.dataArey = action.newLetter;
        //     this._entairRender(this._state);
        // } else if(action.type === ADD_POST_MESSAGE){
        //     this._state.allMessage.dataMessage.push({id: 6, message : this._state.allMessage.areyMessage});
        //     this._state.allMessage.areyMessage = '';
        //     this._entairRender(this._state);
        // } else if(action.type === ADD_LETTER_MESSAGE){
        //     this._state.allMessage.areyMessage = action.newText;
        //     this._entairRender(this._state);
        // }
        
    }
}


// export default store;


