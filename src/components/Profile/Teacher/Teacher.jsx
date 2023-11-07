import React from "react";
import { useSelector } from "react-redux";
import "./Teacher.scss";
import Skeleton from "@mui/material/Skeleton";
import StudentCard from "../../Card/StudentCard/StudentCard";
import itachi from "../../../assests/itachi.png";
import { Button } from "@mui/material";

function Teacher() {
  const { loading, teacher } = useSelector((state) => state.teacherLoad);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <div className="studentProfile">
            <div>{teacher?.name}'s Profile</div>
            <div>
              <div>
                <img src={itachi} alt={itachi} />
                <Button variant="outlined">Edit Profile</Button>
              </div>
              <div>
                <div>
                  <p>Name</p>
                  <p>Subject</p>
                  <p>Email</p>
                  <p>Enrolled Students</p>
                </div>
                <div>
                  <p>: {teacher?.name}</p>
                  <p>: {teacher?.subject}</p>
                  <p>: {teacher?.email}th</p>
                  <p>: {teacher?.students.length}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Teacher;
