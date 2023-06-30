import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {noteSlice} from './api/NoteSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [noteSlice.reducerPath]:noteSlice.reducer

    },
    //meddleware =waa function dhaxda ku jira oo isbadalka ilalinaya 
    middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware()
      .concat(noteSlice.middleware)
    
});
///ina dhagesno isbadalada dhacaya aa== setupListner la dhaha..🤞
setupListeners(store.dispatch);   