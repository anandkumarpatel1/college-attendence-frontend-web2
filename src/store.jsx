import { configureStore } from "@reduxjs/toolkit";
import { allStudentsReducer, enrollNewStudentReducer, enrolledStudentsReducer, logoutReducer, profileStudentsReducer, searchStudentsReducer, teacherLoadReducer, teacherLoginReducer } from "./reducer/Teacher";


const store = configureStore({
  reducer: {
    teacherLogin: teacherLoginReducer,
    teacherLoad: teacherLoadReducer,
    enrolledStudents: enrolledStudentsReducer,
    allStudents: allStudentsReducer,
    searchStudents: searchStudentsReducer,
    studentProfile: profileStudentsReducer,
    enrollNewStudent: enrollNewStudentReducer,
    teacherLogout: logoutReducer,
  },
});

export default store;
