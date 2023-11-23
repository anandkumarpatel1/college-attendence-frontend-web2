import React, { useState } from "react";
import "./StudentCard.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const StudentCard = ({ name, branch, semRollNo, semester, id, regNo, stuTeacher }) => {
  const navigate = useNavigate();

  const { teacher } = useSelector((state) => state.teacherLoad);

  let data = stuTeacher?.indexOf(teacher?._id)


  const StudentCardHandler = () => {
    navigate(`/new-student/${id}`);
  };
  return (
    <div className="studentDetailsCard" onClick={StudentCardHandler}>
      <div>
        <div>
          <h4>Name: </h4>
          <p>Branch: </p>
          <p>Semester: </p>
          <p>Sem RollNo:</p>
          <p>Reg No: </p>
          <p>Status: </p>
        </div>
        <div>
          <h4>{name} </h4>
          <p>{branch} </p>
          <p> {semester} </p>
          <p>{semRollNo} </p>
          <p>{regNo} </p>
          <p style={{color: `${data === -1 ? 'red': 'green'}`, fontWeight: 700}}>{data !== -1 ? 'Enrolled' : 'Unenrolled'} </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
