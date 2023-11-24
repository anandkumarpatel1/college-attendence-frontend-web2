import React, { useEffect } from "react";
import "./AllStudent.scss";
import StudentCard from "../Card/StudentCard/StudentCard";
import { useDispatch, useSelector } from "react-redux";
import { allStudents } from "../../action/Teacher";
import { Skeleton } from "@mui/material";

const AllStudent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allStudents());
  }, [dispatch]);
  const { loading, student } = useSelector((state) => state.allStudents);


  return (
    <>
      {loading ? (
        <>
          <div className="allStudentCont">
            <Skeleton
              variant="rounded"
              width="98%"
              height={80}
              animation="wave"
              sx={{ bgcolor: "grey.900" }}
              style={{ marginTop: 10, borderRadius: 30, border: '1px solid rgba(255, 255, 255, 0.8)' }}
            />
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (item, index) => (
                <div className="allStudentcardLoad" key={index}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={60}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "grey.900" }}
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                </div>
              )
            )}
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default AllStudent;
