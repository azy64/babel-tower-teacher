export const BABEL_TOWER_REDUX_LOGIN_STUDENT = 'BABEL_TOWER_REDUX_LOGIN_STUDENT';
export const BABEL_TOWER_REDUX_LOGIN_TEACHER = 'BABEL_TOWER_REDUX_LOGIN_TEACHER';
export const BABEL_TOWER_BASE_URL = 'http://localhost/babel_tower/public/';
export const BABEL_TOWER_REDUX_LOGIN_DISPLAY = 'BABEL_TOWER_REDUX_LOGIN_DISPLAY';

export const loginStudent = (student) => ({
  type: BABEL_TOWER_REDUX_LOGIN_STUDENT,
  payload: student,
});

export const loginTeacher = (teacher) => ({
  type: BABEL_TOWER_REDUX_LOGIN_TEACHER,
  payload: teacher,
});

export const displayLogin = () => ({
  type: BABEL_TOWER_REDUX_LOGIN_DISPLAY,
  payload: true,
});
