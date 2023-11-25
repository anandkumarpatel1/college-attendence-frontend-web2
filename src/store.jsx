import { configureStore } from "@reduxjs/toolkit";
import {
  allStudentsReducer,
  enrolledStudentsReducer,
  profileStudentsReducer,
  searchStudentsReducer,
  teacherLoadReducer,
  teacherLoginReducer,
  teacherLogoutReducer,
} from "./reducer/Teacher";

const store = configureStore({
  reducer: {
    teacherLogin: teacherLoginReducer,
    teacherLoad: teacherLoadReducer,
    teacherLogout: teacherLogoutReducer,
    enrolledStudents: enrolledStudentsReducer,
    allStudents: allStudentsReducer,
    searchStudents: searchStudentsReducer,
    studentProfile: profileStudentsReducer,
  },
});

export default store;
