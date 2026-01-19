import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';


export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
