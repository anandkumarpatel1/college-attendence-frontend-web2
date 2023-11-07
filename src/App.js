import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import { useDispatch, useSelector } from "react-redux";
import { loadTeacher } from "./action/Teacher";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Teacher from "./components/Profile/Teacher/Teacher";
import Home from "./components/Home/Home";
import Search from './components/Search/Search'
import { Skeleton } from "@mui/material";
import EnrolledStudents from "./components/EnrolledStudents/EnrolledStudents/EnrolledStudents";
import StudentProfile from "./components/Profile/student/StudentProfile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacher());
  }, [dispatch]);

  const { loading } = useSelector(
    (state) => state.teacherLogin
  );

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
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={200}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                    </div>
                    <div style={{ width: "20%", marginLeft: "10px" }}>
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={300}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={200}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
                        style={{ marginTop: 10, borderRadius: 30 }}
                      />
                      <Skeleton
                        variant="rounded"
                        width="100%"
                        height={100}
                        animation="wave"
                        sx={{ bgcolor: "grey.900" }}
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
            element={isAuthenticated ? <Home /> : <Login />}
          />

          <Route path="/me" element={isAuthenticated && <Teacher />} />

          <Route path="/students" element={isAuthenticated && <EnrolledStudents />} />

          <Route path="/student/:id" element={isAuthenticated && <StudentProfile />} />

          <Route path="/search" element={isAuthenticated && <Search />} />
        </Routes>
        {isAuthenticated && <BottomNavbar />}
      </BrowserRouter>
    </>
  );
};

export default App;
