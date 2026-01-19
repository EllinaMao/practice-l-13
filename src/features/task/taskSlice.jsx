import { createSlice } from "@reduxjs/toolkit";
/**
 * 
 * Автоматическое создание действий: Генерирует уникальные строковые имена действий, например counter/increment, и соответствующие функции-создатели.
Управление состоянием: Объединяет начальное состояние и редюсеры для управления этим состоянием.
Типизация с TypeScript: Строго типизирует созданные действия и их полезную нагрузку (payload). 
 */
const initialState = {
  tasks: [],
};

export const tasksReducer = createSlice({
  name: "tasks",

  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksReducer.actions;

export default tasksReducer.reducer;
