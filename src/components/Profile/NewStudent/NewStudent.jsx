import React, { useEffect, useState } from "react";
import "./NewStudent.scss";
import { useDispatch, useSelector } from "react-redux";
import { profileStudent } from "../../../action/Teacher";
import { useParams } from "react-router-dom";
import itachi from "../../../assests/itachi.png";

const NewStudent = () => {
  const [enrolled, setEnrolled] = useState('unenrolled');
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(profileStudent(id));
  }, [dispatch]);

  const { loading, student } = useSelector((state) => state.studentProfile);

  const { teacher } = useSelector((state) => state.teacherLoad);

  let data = student?.teacher;
  data = data?.indexOf(teacher?._id)


  // for(let i = 0; i < data?.length; i++){
  //   if(id === data[i]){
  //     setEnrolled('Enrolled')
  //     console.log(data[i], id)
  //     break;
  //   }
  // }

  return (
    <>
      <div className="NewstudentProfile">
        <div>{student?.name}'s Profile</div>
        <div>
          <div>
            <img src={itachi} alt={itachi} />
          </div>
          <div>
            <div>
              <p>Name</p>
              <p>Branch</p>
              <p>Semester</p>
              <p>Reg No</p>
              <p>Semester RollNo</p>
              <p>ID</p>
            </div>
            <div>
              <p>: {student?.name}</p>
              <p>: {student?.branch}</p>
              <p>: {student?.semester}th</p>
              <p>: {student?.regNo}</p>
              <p>: {student?.semRollNo}</p>
              <p>: {student?._id}</p>
              <p>: {data !== -1  ? 'Enrolled' : 'Unenrolled'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewStudent;
