import { Button, Skeleton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { profileStudent } from "../../../action/Teacher";
import { json, useNavigate } from "react-router-dom";

const StudentDetails = ({ name, id, branch, semRollNo, semester, regNo, present, absent }) => {

  const navigate = useNavigate()

  const studentDetailsCardHandler = () =>{
    navigate(`/student/${id}`)
    localStorage.setItem("present", JSON.stringify(present))
    localStorage.setItem("absent", JSON.stringify(absent))
  }

  const presentHandler = () =>{
    console.log('helo')
  }
  return (
    <div className="studentDetailsCard" >
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
      <Button variant="outlined">Present</Button>
      <Button variant="outlined">Absent</Button>
      </div>
    </div>
  );
};

export default StudentDetails;
