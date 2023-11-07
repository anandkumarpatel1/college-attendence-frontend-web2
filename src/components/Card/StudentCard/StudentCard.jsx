import React from "react";
import "./StudentCard.scss";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ name, branch, semRollNo, semester, id, regNo }) => {
  const navigate = useNavigate();

  const StudentCardHandler = () => {
    navigate(`/student/${id}`);
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
        </div>
        <div>
          <h4>{name} </h4>
          <p>{branch} </p>
          <p> {semester} </p>
          <p>{semRollNo} </p>
          <p>{regNo} </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
