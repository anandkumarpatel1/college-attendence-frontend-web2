import React, { useEffect, useState } from "react";
import "./EnrolledStudents.scss";
import { useDispatch, useSelector } from "react-redux";
import { allStudents, profileStudent } from "../../../action/Teacher";
import { Skeleton } from "@mui/material";
import StudentDetails from "../../Card/StudentDetails/StudentDetails";
import Alert from "../../Card/Alert/Alert";

const EnrolledStudents = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allStudents());
  }, [dispatch]);

  // const { student, loading } = useSelector((state) => state.allStudents);
  const { message } = useSelector(
    (state) => state.studentProfile
  );
  const { loading, teacher } = useSelector((state) => state.teacherLoad);

  return (
    <>
      <div className="StudentDetailsCont">
        <div>
          <p>All Enrolled Students</p>
        </div>
        {message && (
        <div className="alert-cont">
          <Alert message={message} />
        </div>
      )}
        {loading ? (
          <>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (item, index) => (
                <div className="studentDetailsCardLoad" key={index}>
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
          </>
        ) : (
          <>
            {teacher?.students?.map((item, index) => (
              <StudentDetails
                key={index}
                name={item?.name}
                id={item?._id}
                branch={item?.branch}
                semester={item?.semester}
                semRollNo={item?.semRollNo}
                regNo={item?.regNo}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default EnrolledStudents;
