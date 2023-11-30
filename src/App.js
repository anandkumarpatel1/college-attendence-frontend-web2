import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import { useDispatch, useSelector } from "react-redux";
import { loadTeacher } from "./action/Teacher";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Teacher from "./components/Profile/Teacher/Teacher";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import { Skeleton } from "@mui/material";
import EnrolledStudents from "./components/EnrolledStudents/EnrolledStudents/EnrolledStudents";
import StudentProfile from "./components/Profile/student/StudentProfile";
import About from "./components/Home/About/About";
import AddNewStu from "./components/EnrolledStudents/AddNewStudent/AddNewStu";
import AllStudent from "./components/AllStudents/AllStudent";
import NewStudent from "./components/Profile/NewStudent/NewStudent";
import Alert from "./components/Card/Alert/Alert";

const App = () => {
  const [root, setRoot] = useState(window.location.pathname);
  const [a, setA] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacher());
    
  if(root === '/login'){
    setA(false)
  }
  }, [dispatch]);

  const { loading } = useSelector((state) => state.teacherLogin);

  const { isAuthenticated } = useSelector((state) => state.teacherLoad);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "80%" }}>
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={300}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={200}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                    </div>
                    <div style={{ width: "20%", marginLeft: "10px" }}>
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={300}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={200}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>{isAuthenticated ? <Home /> : <Login />} </>
              )
            }
          />

          <Route
            path="/login"
            element={ <Login />}
          />

          <Route path="/me" element={isAuthenticated && <Teacher />} />

          <Route
            path="/students"
            element={isAuthenticated && <EnrolledStudents />}
          />

          <Route
            path="/student/:id"
            element={isAuthenticated && <StudentProfile />}
          />

          <Route path="/search" element={isAuthenticated && <Search />} />

          <Route path="/about" element={<About />} />

          <Route path="/addnewStudent" element={<AddNewStu />} />

          <Route path="/allstudents" element={<AllStudent />} />

          <Route path="/new-student/:id" element={<NewStudent />} />

          <Route path="/alert" element={<Alert />} />
        </Routes>
        {isAuthenticated && a && <BottomNavbar />}
      </BrowserRouter>
    </>
  );
};

export default App;
