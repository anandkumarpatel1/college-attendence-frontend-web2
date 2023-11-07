import axios from "axios";

export const loginTeacher = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.post(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher/login",
      { email, password },
      config
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.teacher,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadTeacher = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher",
      config
    );

    dispatch({
      type: "LoadSuccess",
      payload: data.teacher,
    });
  } catch (error) {
    dispatch({
      type: "LoadFailure",
      payload: error.response.data.message,
    });
  }
};

//get all enrolled students
export const getAllEnrolledStudents = () => async (dispatch) => {
  try {
    dispatch({
      type: "EnrolledStudentsRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher",
      config
    );

    dispatch({
      type: "EnrolledStudentsSuccess",
      payload: data.teacher.students,
    });
  } catch (error) {
    dispatch({
      type: "EnrolledStudentsFailure",
      payload: error.response.data.message,
    });
  }
};

export const allStudents = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllStudentsRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/students",
      config
    );

    dispatch({
      type: "AllStudentsSuccess",
      payload: data.student,
    });
  } catch (error) {
    dispatch({
      type: "AllStudentsFailure",
      payload: error.response.data.message,
    });
  }
};

export const searchStudents = (key) => async (dispatch) => {
  try {
    dispatch({
      type: "SearchStudentRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      `https://college-attendence-backend-sp8j.vercel.app/api/v1/students/${key}`,
      config
    );

    dispatch({
      type: "SearchStudentSuccess",
      payload: data.student,
    });
  } catch (error) {
    dispatch({
      type: "SearchStudentFailure",
      payload: error.response.data.message,
    });
  }
};

export const profileStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ProfileStudentRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      `https://college-attendence-backend-sp8j.vercel.app/api/v1/student/${id}`,
      config
    );

    dispatch({
      type: "ProfileStudentSuccess",
      payload: data.student,
    });
  } catch (error) {
    dispatch({
      type: "ProfileStudentFailure",
      payload: error.response.data.message,
    });
  }
};

export const enrollNewStudent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "EnrollNewRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.post(
      `https://college-attendence-backend-sp8j.vercel.app/api/v1/student/enroll/${id}`,
      config
    );

    dispatch({
      type: "EnrollNewSuccess",
      payload: data.student,
    });
  } catch (error) {
    dispatch({
      type: "EnrollNewFailure",
      payload: error.response.data.message,
    });
  }
};

export const logoutTeacher = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      sameSite: "None",
    };

    const { data } = await axios.get(
      `https://college-attendence-backend-sp8j.vercel.app/api/v1/logout`,
      config
    );

    console.log(document.cookie)

    dispatch({
      type: "LogoutSuccess",
      payload: document.cookie = "token= null; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};
