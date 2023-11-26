import React, { useEffect } from "react";
import "./NewStudent.scss";
import { useDispatch, useSelector } from "react-redux";
import { enrollNewStudent, profileStudent } from "../../../action/Teacher";
import { useParams, useNavigate } from "react-router-dom";
import itachi from "../../../assests/itachi.png";
import { Skeleton } from "@mui/material";

const NewStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(profileStudent(id));
  }, [dispatch, id]);

  const { loading, student } = useSelector((state) => state.studentProfile);


  const { teacher } = useSelector((state) => state.teacherLoad);

  let data = student?.teacher;
  data = data?.indexOf(teacher?._id);

  const enrolleHandler = () => {
    if (data !== -1) {
      alert("Student is already enrolled");
    } else {
      dispatch(enrollNewStudent(id));
      navigate("/allstudents");
      alert("Student Enrolled Successful");
    }
  };

  return (
    <>
      {loading ? (
        <div className="newStuProfileLoad">
          <Skeleton
            variant="rounded"
            width="95%"
            height={80}
            animation="wave"
            sx={{ bgcolor: "grey.800" }}
            style={{ marginTop: 20, borderRadius: 30 }}
          />

          <div>
            <div>
              <Skeleton
                variant="rounded"
                width={170}
                height={170}
                animation="wave"
                sx={{ bgcolor: "grey.800" }}
                style={{
                  marginTop: 80,
                  borderRadius: "100%",
                  marginBottom: 80,
                }}
              />
            </div>

            <div>
              {[1, 1, 1, 1, 1, 1].map((item, index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  width="95%"
                  height={22}
                  animation="wave"
                  sx={{ bgcolor: "grey.800" }}
                  style={{ marginTop: 5, borderRadius: 30 }}
                />
              ))}
            </div>
          </div>

          <div>
            <Skeleton
              variant="rounded"
              width="65%"
              height={60}
              animation="wave"
              sx={{ bgcolor: "grey.800" }}
              style={{ marginTop: 60, borderRadius: 30 }}
            />
          </div>
        </div>
      ) : (
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
                <p>Status</p>
              </div>
              <div>
                <p>: {student?.name}</p>
                <p>: {student?.branch}</p>
                <p>: {student?.semester}th</p>
                <p>: {student?.regNo}</p>
                <p>: {student?.semRollNo}</p>
                <p>: {student?._id}</p>
                <p
                  style={{
                    color: `${data === -1 ? "red" : "green"}`,
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  : {data !== -1 ? "Enrolled" : "Unenrolled"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              style={{
                color: `${data === -1 ? "red" : "green"}`,
                fontWeight: 700,
                fontSize: 20,
              }}
              onClick={enrolleHandler}
            >
              {data !== -1 ? "Enrolled" : "Unenrolled"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewStudent;
