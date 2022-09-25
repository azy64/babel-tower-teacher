/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BABEL_TOWER_BASE_URL } from '../login/loginAction';

/* import {
  BABEL_TOWER_REDUX_LESSONS_ADD, BABEL_TOWER_REDUX_LESSONS_ADD_CONTENT,
  BABEL_TOWER_REDUX_LESSONS_FETCHING_ALL, BABEL_TOWER_REDUX_LESSONS_REMOVE,
  BABEL_TOWER_REDUX_LESSONS_REMOVE_CONTENT,
} from './lessonsAction';
*/
const init = {
  lessons: [],
  classRooms: [],
  lectures: [],
  lessonCount: 0,
  message: '',
};

export const saveLesson = createAsyncThunk('lesson/save', (lesson) =>
// eslint-disable-next-line no-restricted-syntax
  /* for (const el of lesson.entries) {
    console.log('formData---:', el[0], '--', el[1]);
  }
  */
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(`${BABEL_TOWER_BASE_URL}lesson/create`, {
    method: 'POST',
    /* headers: {
    'content-type': 'application/json',
  }, */
    body: lesson,

  })
    .then((result) => result.json())
    .then((data) => data));

/**
 *  this function is for saving classroom
*/
export const createClassRoom = createAsyncThunk('classroom/save', (formData) => fetch(`${BABEL_TOWER_BASE_URL}classroom/create`, {
  method: 'POST',
  body: formData,
})
  .then((result) => result.json())
  .then((data) => data));

export const getAllUserLessons = createAsyncThunk('lessons/all', (formData) => fetch(`${BABEL_TOWER_BASE_URL}lesson/all`, {
  method: 'POST',
  body: formData,
})
  .then((result) => result.json())
  .then((data) => data));

// ------------------------------------------------------------------------------------------------
export const getAllClassroomUser = createAsyncThunk('classroom/all', (formData) => fetch(`${BABEL_TOWER_BASE_URL}classroom/all`, {
  method: 'POST',
  body: formData,
})
  .then((result) => result.json())
  .then((data) => data));

const lessonSlice = createSlice({
  initialState: init,
  name: 'lesson',
  reducers: {
    addLesson: (state) => {
      state.lessons.push({ name: 'lecture biblique' });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveLesson.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.retour = action.payload.lesson;
      state.lessons = action.payload.lessons;
      state.contents = action.payload.contenus;
      state.saveLoading = false;
    });
    builder.addCase(saveLesson.rejected, (state) => {
      state.message = ' We got a problem with remote server';
    });
    builder.addCase(saveLesson.pending, (state) => {
      state.saveLoading = true;
    });

    builder.addCase(createClassRoom.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.classRooms = action.payload.classrooms;
      state.lessons = action.payload.lessons;
      state.saveLoading = false;
    });
    builder.addCase(createClassRoom.rejected, (state) => {
      state.message = ' We got a problem with remote server';
    });
    builder.addCase(createClassRoom.pending, (state) => {
      state.saveLoading = true;
    });
    builder.addCase(getAllUserLessons.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lessons = action.payload.lessons;
      state.saveLoading = false;
    });
    builder.addCase(getAllUserLessons.pending, (state) => {
      state.saveLoading = true;
    });
    builder.addCase(getAllUserLessons.rejected, (state) => {
      state.message = ' We got a problem with remote server';
    });

    builder.addCase(getAllClassroomUser.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.classRooms = action.payload.classrooms;
      state.saveLoading = false;
    });
    builder.addCase(getAllClassroomUser.pending, (state) => {
      state.saveLoading = true;
    });
    builder.addCase(getAllClassroomUser.rejected, (state, action) => {
      state.message = action.error?.message;
    });
  },
});

export default lessonSlice.reducer;
export const { addLesson } = lessonSlice.actions;
