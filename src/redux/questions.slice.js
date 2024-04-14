import { createSlice } from '@reduxjs/toolkit';

const initState = {
  questions: [],
  questionIndex: 0,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: initState,
  reducers: {
    addQuestions: (state, action) => {
      state.questions = action.payload;
    },
    nextQuestion: (state) => {
      state.questionIndex = state.questionIndex + 1
    },
    resetQuestions: (state) => {
      return initState
    }
    
  },
});

export default questionsSlice.reducer;

export const { addQuestions, nextQuestion, resetQuestions } = questionsSlice.actions;
