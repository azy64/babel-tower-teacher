import { createSlice } from '@reduxjs/toolkit';
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
const lessonSlice = createSlice({
  initialState: init,
  name: 'lesson',
  reducers: {
    addLesson: (state) => {
      state.lessons.push({ name: 'lecture biblique' });
    },
  },
});

export default lessonSlice.reducer;
export const { addLesson } = lessonSlice.actions;
