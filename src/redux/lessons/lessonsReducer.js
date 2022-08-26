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
};

/* const lessonsReducer = (state = init, action) => {
  switch (action.type) {
    case BABEL_TOWER_REDUX_LESSONS_ADD:
      break;
    case BABEL_TOWER_REDUX_LESSONS_REMOVE:
      break;
    case BABEL_TOWER_REDUX_LESSONS_ADD_CONTENT:
      break;
    case BABEL_TOWER_REDUX_LESSONS_FETCHING_ALL:
      break;
    case BABEL_TOWER_REDUX_LESSONS_REMOVE_CONTENT:
      break;
    default:
      return state;
  }
  return state;
};
*/
export const saveLesson = createAsyncThunk('lesson/save', (lesson) => {
  const formDatum = new FormData();
  formDatum.append('lesson', lesson);
  return fetch(`${BABEL_TOWER_BASE_URL}lesson/create`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: formDatum,

  })
    .then((result) => result.json())
    .then((data) => data);
});
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
    });
    builder.addCase(saveLesson.rejected, (state) => {
      state.message = ' We got a problem with remote server';
    });
    builder.addCase(saveLesson.pending, (state) => {
      state.saveLoading = true;
    });
  },
});

export default lessonSlice.reducer;
export const { addLesson } = lessonSlice.actions;
