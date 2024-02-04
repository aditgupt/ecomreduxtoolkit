import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
    count : 0,
    items : [],
}

export default  createReducer(initialstate,(builder) => {
    builder.addCase('CHNG_COUNT', (state, action) => {
        state.count = state.count + action.payload;
    })
    builder.addCase('ZERO_COUNT', (state, action) => {
        state.count = 0;
        state.items = [];
    })
    builder.addCase('REMOVE_ITEM', (state, action) => {
        state.items.map((x)=>
        {
            if(x.id == action.payload.id){
                let pcount = x.count;
                let newarr = state.items.filter((i) => !(i.id==action.payload.id));
                state.count = state.count - pcount;
                state.items = newarr;
                
            }
        }
        )
    })
    builder.addCase('SUB_ITEM', (state, action) => {
        state.items.map((x)=>
        {
            if(x.id == action.payload.id){
                let pcount = x.count;
                if(pcount > 0 ){
                    let newarr = state.items.filter((i) => !(i.id==action.payload.id));
                action.payload.count = pcount-1;
                // console.log(action.payload);
                state.count = state.count -1;
                state.items = [...newarr, action.payload];
                }
                
            }
        }
        )
    })
    builder.addCase('ADD_ITEM', (state, action) => {


        if(state.items.length > 0){
            state.items.map((x)=>
        {
            if(x.id == action.payload.id){
                let pcount = x.count;
                let newarr = state.items.filter((i) => !(i.id==action.payload.id));
                action.payload.count = pcount+1;
                // console.log(action.payload);
                state.items = [...newarr, action.payload];
            }
            else{
                state.items = [...state.items, action.payload]
            }
        }
        )
        }
        else{
            state.items = [...state.items, action.payload]
        }
        
    })
})