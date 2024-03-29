import React, { useState } from "react";
import "./StudentProfile.scss";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { profileStudent } from "../../../action/Teacher";
import { Button, Skeleton } from "@mui/material";
import itachi from "../../../assests/itachi.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Calendar from "react-awesome-calendar";

ChartJS.register(ArcElement, Tooltip, Legend);

const StudentProfile = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(profileStudent(id))
  // }, [dispatch, id])

  const { loading, student } = useSelector((state) => state.studentProfile);

  const { teacher } = useSelector((state) => state.teacherLoad);

  let i = 0;
  let y = 0;

  let events = student?.present?.map((item, index) => ({
    key: index,
    id: 1,
    color: "blue",
    from: `${item?.date}`,
    to: `${item?.date}`,
    title: "Present",
  }));
  let events2 = student?.absent?.map((item, index) => ({
    key: index,
    id: 1,
    color: "red",
    from: `${item?.date}`,
    to: `${item?.date}`,
    title: "Absent",
  }));

  events = events?.concat(events2);

  if (student) {
    for (let x of student?.present) {
      if (teacher?._id === x?._id) {
        i++;
      }
    }

    for (let x of student?.absent) {
      if (teacher?._id === x?._id) {
        y++;
      }
    }
  }

  // const total = i + y;

  const data = {
    labels: ["Absent", "Present"],
    datasets: [
      {
        label: "Attendence Day of",
        data: [y, i],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      {loading ? (
        <>
          <div className="studentProfileLoading">
            <Skeleton
              variant="rounded"
              width="95%"
              height={80}
              animation="wave"
              style={{ marginTop: 10, borderRadius: 30 }}
            />
            <div>
              <div>
                <Skeleton
                  variant="rounded"
                  width={190}
                  height={190}
                  animation="wave"
                  style={{ marginTop: 10, borderRadius: "100%" }}
                />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (
                  <Skeleton
                    key={item}
                    variant="rounded"
                    width="80%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                ))}
              </div>
            </div>

            <div>
              <Skeleton
                variant="rounded"
                width="100%"
                height={350}
                animation="wave"
                style={{ marginTop: 10, borderRadius: "100%" }}
              />
            </div>

            <div>
              <Skeleton
                variant="rounded"
                width="90%"
                height={600}
                animation="wave"
                style={{ marginTop: 10, borderRadius: 25 }}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="studentProfile">
          <div>{student?.name}'s Profile</div>
          <div>
            <div>
              <img src='https://img.freepik.com/free-photo/3d-rendering-cute-cartoon-character-cafe-with-bokeh-background_1142-41143.jpg?t=st=1705513469~exp=1705517069~hmac=d1394d3bf4e7ad55e695b4579e45d2a37012817c21c88b7aee1a184c9789ad62&w=740' alt={itachi} style={{borderRadius: '100%'}}/>
            </div>
            <div>
              <div>
                <p>Name</p>
                <p>Branch</p>
                <p>Semester</p>
                <p>Reg No</p>
                <p>Semester RollNo</p>
                <p>ID</p>
                <p>Present</p>
                <p>Absent</p>
                <p>Total</p>
              </div>
              <div>
                <p>: {student?.name}</p>
                <p>: {student?.branch}</p>
                <p>: {student?.semester}th</p>
                <p>: {student?.regNo}</p>
                <p>: {student?.semRollNo}</p>
                <p>: {student?._id}</p>
                <p>
                  : {i} Day ({(i * 100) / (i + y)}%)
                </p>
                <p>: {y} Day</p>
                <p>: {i + y} Day</p>
              </div>
            </div>
          </div>
          <div className="doughnutCont">
            <Doughnut data={data} />
          </div>
          <div className="calenderChart">
            <Calendar events={events} events2={events2} />
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProfile;
