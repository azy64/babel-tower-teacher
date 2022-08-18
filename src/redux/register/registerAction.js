export const BABEL_TOWER_REDUX_REGISTER_STUDENT = 'BABEL_TOWER_REDUX_REGISTER_STUDENT';
export const BABEL_TOWER_REDUX_REGISTER_TEACHER = 'BABEL_TOWER_REDUX_REGISTER_TEACHER';

export const registerStudent = (student) => ({
  type: BABEL_TOWER_REDUX_REGISTER_STUDENT,
  payload: student,
});

export const registerTeacher = (teacher) => ({
  type: BABEL_TOWER_REDUX_REGISTER_TEACHER,
  payload: teacher,
});
