import React, { useState } from "react";
import "./EnrollnewStu.scss";
import { useDispatch } from "react-redux";
import { newStudent } from "../../../action/Teacher";
import { Password } from "@mui/icons-material";

const AddNewStu = () => {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/close-up-beautiful-girl-portrait_23-2150799919.jpg?t=st=1705131376~exp=1705134976~hmac=91a31254f333386f7759c5d8a2fc1aa439f3598cbd619a06bc5d41e0b829c47c&w=740"
  );
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [semRollNo, setSemRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const dispatch = useDispatch();

  const imgHandler = (e) => {
    setImage(e.target.value);
  };

  const createStudentHandler = (e) => {
    e.preventDefault();
    dispatch(
      newStudent(name, image, regNo, password, semRollNo, branch, semester)
    );
  };
  return (
    <>
      <div className="EnrollnewCont">
        <div>Enroll New Student</div>
        <div>
          <div>
            <img src={image} alt={image} />
            <select onChange={imgHandler}>
              <option
                value={
                  "https://img.freepik.com/free-photo/close-up-beautiful-girl-portrait_23-2150799919.jpg?t=st=1705131376~exp=1705134976~hmac=91a31254f333386f7759c5d8a2fc1aa439f3598cbd619a06bc5d41e0b829c47c&w=740"
                }
              >
                Izumi
              </option>
              <option
                value={
                  "https://img.freepik.com/free-photo/view-woman-holding-cup-coffee_23-2150698759.jpg?t=st=1705132571~exp=1705136171~hmac=76485fe89ec1c05f9b4249e9118875b5d1fa0aa318eef1ae8fd2cc0e6311dff7&w=740"
                }
              >
                Noari
              </option>
              <option
                value={
                  "https://img.freepik.com/free-photo/portrait-boy-with-backpack-3d-rendering_1142-38959.jpg?t=st=1705137158~exp=1705140758~hmac=041393ae847135f9f132508f6e3795f1f7a813f069ecfa7ca34f978d895288a2&w=740"
                }
              >
                Itachi
              </option>
              <option
                value={
                  "https://img.freepik.com/free-photo/3d-rendering-cute-cartoon-character-cafe-with-bokeh-background_1142-41143.jpg?t=st=1705513469~exp=1705517069~hmac=d1394d3bf4e7ad55e695b4579e45d2a37012817c21c88b7aee1a184c9789ad62&w=740"
                }
              >
                Sarda
              </option>
              <option
                value={
                  "https://img.freepik.com/free-photo/3d-illustration-teenage-girl-with-hoodie_1142-32303.jpg?t=st=1705513492~exp=1705517092~hmac=39fdfa673b04cd57c1dba2603e64363d03f5540266d75aee6811c0d7c0f47be1&w=740"
                }
              >
                shishui
              </option>
            </select>
          </div>
          <div>
            <form onSubmit={createStudentHandler}>
              <input
                type="text"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Registration No"
                required
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Semester Roll No"
                required
                value={semRollNo}
                onChange={(e) => setSemRollNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Branch"
                required
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
              <input
                type="text"
                placeholder="Semester"
                required
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Create Student" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewStu;
