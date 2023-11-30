import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

//teacher login reducer
export const teacherLoginReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.message = `Login Successful, Welcome Back`
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//teacher logout reducer
export const teacherLogoutReducer = createReducer(initialState, {
  LogoutRequest: (state) => {
    state.loading = true;
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.message = 'Logout Successful, Come Again'
    state.teacher = null;
    state.isAuthenticated = false;
  },
  LogoutFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//teacehr load reducer
export const teacherLoadReducer = createReducer(initialState, {
  LoadRequest: (state) => {
    state.loading = true;
  },
  LoadSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.isAuthenticated = true;
  },
  LoadFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//fetch enrolled students reducer
export const enrolledStudentsReducer = createReducer(initialState, {
  EnrolledStudentsRequest: (state) => {
    state.loading = true;
  },
  EnrolledStudentsSuccess: (state, action) => {
    state.loading = false;
    state.teacher.students = action.payload;
    state.isAuthenticated = true;
  },
  EnrolledStudentsFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//fetch all students reducer
export const allStudentsReducer = createReducer(initialState, {
  AllStudentsRequest: (state) => {
    state.loading = true;
  },
  AllStudentsSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  AllStudentsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

//searching students reducer
export const searchStudentsReducer = createReducer(initialState, {
  SearchStudentRequest: (state) => {
    state.loading = true;
  },
  SearchStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  SearchStudentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

// per student profile reducer
export const profileStudentsReducer = createReducer(initialState, {
  ProfileStudentRequest: (state) => {
    state.loading = true;
  },
  ProfileStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
    state.isAuthenticated = true;
  },
  ProfileStudentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  //Enroll new student reducer
  EnrollNewStuRequest: (state) => {
    state.loading = true;
  },
  EnrollNewStuSuccess: (state, action) => {
    state.loading = false;
    state.action = action.payload;
  },
  EnrollNewStuFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //present attendece reudcer
  PresentAttendenceRequest: (state) => {
    state.loading = true;
  },
  PresentAttendenceSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
    state.message = 'Present Sucessful'
  },
  PresentAttendenceFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
