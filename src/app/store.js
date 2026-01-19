import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';
import tasksReducer from '../features/task/taskSlice.jsx';

export default configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
    },
});

