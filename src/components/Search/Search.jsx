import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchStudents } from "../../action/Teacher";
import StudentCard from "../Card/StudentCard/StudentCard";
import { Skeleton } from "@mui/material";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(searchStudents(search));
  };

  const { loading, student } = useSelector((state) => state.searchStudents);
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="searchCont">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
          />
          <div onClick={SubmitHandler}>
            <SearchIcon style={{ color: "rgba(38, 136, 249, 0.815)" }} />
          </div>
        </div>
      </form>
      <>
        {loading ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (item, index) => (
                <div className="studentDetailsCardLoad" key={index}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={60}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    style={{ marginTop: 10, borderRadius: 30 }}
                  />
                </div>
              )
            )}
          </div>
        ) : (
          <div
            style={{
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginBottom: "100px",
            }}
          >
            {student?.map((item, index) => (
              <StudentCard
                key={index}
                name={item.name}
                branch={item.branch}
                semester={item.semester}
                regNo={item.regNo}
                semRollNo={item.semRollNo}
                id={item._id}
                present={item?.present}
                absent={item?.absent}
              />
            ))}
          </div>
        )}
      </>
    </>
  );
};

export default Search;
