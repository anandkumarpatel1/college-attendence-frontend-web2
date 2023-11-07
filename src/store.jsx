import { configureStore } from "@reduxjs/toolkit";
import { allStudentsReducer, enrollNewStudentReducer, enrolledStudentsReducer, profileStudentsReducer, searchStudentsReducer, teacherLoadReducer, teacherLoginReducer } from "./reducer/Teacher";


const store = configureStore({
  reducer: {
    teacherLogin: teacherLoginReducer,
    teacherLoad: teacherLoadReducer,
    enrolledStudents: enrolledStudentsReducer,
    allStudents: allStudentsReducer,
    searchStudents: searchStudentsReducer,
    studentProfile: profileStudentsReducer,
    enrollNewStudent: enrollNewStudentReducer
  },
});

export default store;
