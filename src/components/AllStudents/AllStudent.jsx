import React, { useEffect } from "react";
import "./AllStudent.scss";
import StudentCard from "../Card/StudentCard/StudentCard";
import { useDispatch, useSelector } from "react-redux";
import { allStudents } from "../../action/Teacher";

const AllStudent = () => {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(allStudents())
  }, [dispatch])
  const { loading, student } = useSelector((state) => state.allStudents);

  return (
    <>
      <div className="allStuCont">
        <div>All Enrolled/Unenrolled Students</div>
        {student?.map((item, index) => (
          <StudentCard
            key={index}
            name={item.name}
            branch={item.branch}
            semester={item.semester}
            regNo={item.regNo}
            semRollNo={item.semRollNo}
            id={item._id}
            stuTeacher={item.teacher}
          />
        ))}
      </div>
    </>
  );
};

export default AllStudent;
