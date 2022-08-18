export const BABEL_TOWER_REDUX_LESSONS_ADD = 'BABEL_TOWER_REDUX_LESSONS_ADD';
export const BABEL_TOWER_REDUX_LESSONS_REMOVE = 'BABEL_TOWER_REDUX_LESSONS_REVOME';
// const BABEL_TOWER_REDUX_LESSONS_UPDATE = 'BABEL_TOWER_REDUX_LESSONS_UPDATE';
export const BABEL_TOWER_REDUX_LESSONS_ADD_CONTENT = 'BABEL_TOWER_REDUX_LESSONS_ADD_CONYENT';
export const BABEL_TOWER_REDUX_LESSONS_REMOVE_CONTENT = 'BABEL_TOWER_REDUX_LESSONS_REMOVE_CONTENT';
// const BABEL_TOWER_REDUX_LESSONS_UPDATE_CONTENT = "BABEL_TOWER_REDUX_LESSONS_UPDATE_CONTENT";
export const BABEL_TOWER_REDUX_LESSONS_FETCHING_ALL = 'BABEL_TOWER_REDUX_LESSONS_FETCHING_ALL';

export const lessonAdd = (lesson) => ({
  type: BABEL_TOWER_REDUX_LESSONS_ADD,
  payload: lesson,
});

export const lessonRemove = (lesson) => ({
  type: BABEL_TOWER_REDUX_LESSONS_REMOVE,
  payload: lesson,
});

export const addContent = (content) => ({
  type: BABEL_TOWER_REDUX_LESSONS_ADD_CONTENT,
  payload: content,
});
export const removeContent = (content) => ({
  type: BABEL_TOWER_REDUX_LESSONS_REMOVE_CONTENT,
  payload: content,
});

export const fetchLessons = () => ({
  type: BABEL_TOWER_REDUX_LESSONS_FETCHING_ALL,
  payload: true,
});
