import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Teacher.scss";
import itachi from "../../../assests/itachi.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loadTeacher } from "../../../action/Teacher";
import { Skeleton } from "@mui/material";

function Teacher() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeacher());
  }, [dispatch]);

  const { loading, teacher } = useSelector((state) => state.teacherLoad);

  const EnrollnewHand = () => {
    navigate("/allstudents");
  };

  const AddNewStuHandler = () => {
    navigate("/addnewStudent");
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
              <Button variant="outlined" onClick={EnrollnewHand}>
                Enroll New Students
              </Button>
              <Button variant="outlined" onClick={AddNewStuHandler}>
                Add new student
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Teacher;
