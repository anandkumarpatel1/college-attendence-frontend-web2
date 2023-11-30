import React, { useState } from "react";
import "./EnrollnewStu.scss";
import { useDispatch } from "react-redux";
import { newStudent } from "../../../action/Teacher";
import { Password } from "@mui/icons-material";

const AddNewStu = () => {
  const [image, setImage] = useState(
    "http://drive.google.com/uc?export=view&id=1yxARgpR_w-LRwRzXVEoj-8dE7-zRLMT4"
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
                  "http://drive.google.com/uc?export=view&id=1yxARgpR_w-LRwRzXVEoj-8dE7-zRLMT4"
                }
              >
                itachi
              </option>
              <option
                value={
                  "http://drive.google.com/uc?export=view&id=1IqHK1SF-5S1Y8ocjaUZA3cMCLQqyUxz0"
                }
              >
                madra
              </option>
              <option
                value={
                  "http://drive.google.com/uc?export=view&id=1pAbEDbMOAT1LZ9fC7IqOsrlVtPuf7OjF"
                }
              >
                obito
              </option>
              <option
                value={
                  "http://drive.google.com/uc?export=view&id=1h8-upQG677XlkNogXB8EWfbiFRoStJQG"
                }
              >
                sasuke
              </option>
              <option
                value={
                  "http://drive.google.com/uc?export=view&id=1xEXy9k3pY4QRrPW86G0ftjZBjAGYejLQ"
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
