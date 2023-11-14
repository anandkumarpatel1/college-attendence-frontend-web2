import { configureStore } from "@reduxjs/toolkit";
import { allStudentsReducer, enrollNewStudentReducer, enrolledStudentsReducer, profileStudentsReducer, searchStudentsReducer, teacherLoadReducer, teacherLoginReducer, teacherLogoutReducer } from "./reducer/Teacher";


const store = configureStore({
  reducer: {
    teacherLogin: teacherLoginReducer,
    teacherLoad: teacherLoadReducer,
    teacherLogout: teacherLogoutReducer,
    enrolledStudents: enrolledStudentsReducer,
    allStudents: allStudentsReducer,
    searchStudents: searchStudentsReducer,
    studentProfile: profileStudentsReducer,
    enrollNewStudent: enrollNewStudentReducer
  },
});

export default store;
