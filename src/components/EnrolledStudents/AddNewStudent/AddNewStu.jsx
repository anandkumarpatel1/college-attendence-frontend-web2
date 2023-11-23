import React, { useState } from "react";
import "./EnrollnewStu.scss";
import itachi from "../../../assests/itachi.png";
import madra from "../../../assests/madra.png";
import obito from "../../../assests/obito.png";
import sasuke from "../../../assests/sasuke.png";
import shishui from "../../../assests/shishui.png";

const AddNewStu = () => {
  const [img, setImg] = useState(itachi);

  const imgHandler = (e) => {
    setImg(e.target.value);
    console.log(img);
  };

  const createStudentHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="EnrollnewCont">
        <div>Enroll New Student</div>
        <div>
          <div>
            <img src={img} alt={img} />
            <select onChange={imgHandler}>
              <option value={itachi}>itachi</option>
              <option value={obito}>obito</option>
              <option value={madra}>madra</option>
              <option value={sasuke}>sasuke</option>
              <option value={shishui}>shishui</option>
            </select>
          </div>
          <div>
            <form onSubmit={createStudentHandler}>
              <input type="text" placeholder="Enter Name" required />
              <input type="text" placeholder="Registration No" required />
              <input type="text" placeholder="Semester Roll No" required />
              <input type="text" placeholder="Branch" required />
              <input type="text" placeholder="Semester" required />
              <input type="password" placeholder="Password" required />
              <input type="submit" value="Create Student" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewStu;
