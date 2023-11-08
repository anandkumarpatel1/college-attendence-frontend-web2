import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const teacherLoginReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.error;
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
    state.error = action.error;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

export const teacherLogoutReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.teacher = null;
    state.isAuthenticated = false;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.error;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

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
    state.error = action.error;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

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
    state.error = action.error;
  },
  clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});

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

export const profileStudentsReducer = createReducer(initialState, {
  ProfileStudentRequest: (state) => {
    state.loading = true;
  },
  ProfileStudentSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  ProfileStudentFailure: (state, action) => {
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

export const enrollNewStudentReducer = createReducer(initialState, {
  EnrollNewRequest: (state) => {
    state.loading = true;
  },
  EnrollNewSuccess: (state, action) => {
    state.loading = false;
    state.action = action.payload;
  },
  EnrollNewFailure: (state, action) => {
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
