import React from "react";
import { useSelector } from "react-redux";
import "./Teacher.scss";
import itachi from "../../../assests/itachi.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Teacher() {
  const { loading, teacher } = useSelector((state) => state.teacherLoad);
  const navigate = useNavigate()

  const EnrollnewHand = () =>{
    navigate('/allstudents')
  }

  const AddNewStuHandler = () =>{
    navigate('/addnewStudent')
  }

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

            <div>
              <Button variant="outlined" onClick={EnrollnewHand}>Enroll New Students</Button>
              <Button variant="outlined" onClick={AddNewStuHandler}>Add new student</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Teacher;
