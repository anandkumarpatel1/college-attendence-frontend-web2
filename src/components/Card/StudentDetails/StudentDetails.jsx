import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { presentAttendence, profileStudent } from "../../../action/Teacher";

const StudentDetails = ({
  name,
  id,
  branch,
  semRollNo,
  semester,
  regNo,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, student } = useSelector((state) => state.studentProfile);

  const studentDetailsCardHandler = () => {
    dispatch(profileStudent(id));
    localStorage.setItem('present', student?.present)
    navigate(`/student/${id}`);
  };

  const PresentHandler = () => {
    dispatch(profileStudent(id));
    dispatch(presentAttendence(id));
  };
  return (
    <div className="studentDetailsCard">
      <div onClick={studentDetailsCardHandler}>
        <div>
          <h4>Name: </h4>
          <p>Branch: </p>
          <p>Semester: </p>
          <p>Sem RollNo:</p>
          <p>Reg No: </p>
        </div>
        <div>
          <h4>{name} </h4>
          <p>{branch} </p>
          <p> {semester} </p>
          <p>{semRollNo} </p>
          <p>{regNo} </p>
        </div>
      </div>
      <div>
        <Button variant="outlined" onClick={PresentHandler}>
          Present
        </Button>
        <Button variant="outlined">Absent</Button>
      </div>
    </div>
  );
};

export default StudentDetails;
