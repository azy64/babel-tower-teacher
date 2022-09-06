/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BABEL_TOWER_BASE_URL } from './loginAction';

const init = {
  user: {},
  loading: true,
};

/* const loginReducer = (state = init, action) => {
  switch (action.type) {
    case BABEL_TOWER_REDUX_LOGIN_STUDENT:
      return {
        ...state, user: action.payload,
      };
    case BABEL_TOWER_REDUX_LOGIN_TEACHER:
      return {
        ...state, user: action.payload,
      };
    case BABEL_TOWER_REDUX_LOGIN_DISPLAY:
      return {
        ...state, displayLogin: !state.displayLogin,
      };
    default:
      return state;
  }
};
*/
/* export const signInStudent = (student) => async (dispatch) => {
  const { email, password } = student.payload;
  await fetch(`${BABEL_TOWER_BASE_URL}student/login`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((result) => result.json())
    .then((data) => {
      dispatch(loginStudent(data));
    })
    .catch(() => { dispatch(loginStudent({})); });
};
*/
/* export const singInTeacher = async (teacher) => async (dispatch) => {
  const { email, password } = teacher.payload;
  await fetch(`${BABEL_TOWER_BASE_URL}teacher/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),

  })
    .then((result) => result.json())
    .then((data) => {
      dispatch(loginTeacher(data));
    })
    .catch(() => { dispatch(loginTeacher({})); });
};
*/
export const signInStudent = createAsyncThunk('login/signSt', (student) => {
  const { email, password } = student;
  return fetch(`${BABEL_TOWER_BASE_URL}student/login`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((result) => result.json())
    .then((data) => data);
});
export const signInTeacher = createAsyncThunk('login/signInT', (teacher) => {
  console.log('teacher avant to send:', teacher);
  const { email, password } = teacher;
  return fetch(`${BABEL_TOWER_BASE_URL}teacher/login-teacher`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),

  })
    .then((result) => result.json())
    .then((data) => data);
});

export const regeisterTeacher = createAsyncThunk('login/register', (teacher) => fetch(`${BABEL_TOWER_BASE_URL}teacher/create`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(teacher),

})
  .then((result) => result.json())
  .then((data) => data));
const loginSlice = createSlice({
  initialState: init,
  name: 'login',
  reducers: {
    loginStudent: (state, action) => {
      // let { user } = state;
      state.user = action.payload;
    },
    loginTeacher: (state, action) => {
      state.user = action.payload;
    },
    loginDisplay: (state) => {
      state.displayLogin = !state.displayLogin;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(signInTeacher.fulfilled, (state, action) => {
      state.user = action.payload;
      if (state.user) state.loading = false;
      else state.loading = true;
    });
    builder.addCase(signInTeacher.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(signInStudent.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signInStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(regeisterTeacher.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(regeisterTeacher.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export default loginSlice.reducer;
export const { loginDisplay, loginStudent, loginTeacher } = loginSlice.actions;
