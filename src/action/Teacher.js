import axios from "axios";

//login teacher
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

//enroll new student
export const enrollNewStudent = (id) => async (dispatch) => {
try {
  dispatch({
    type: "EnrollNewStuRequest",
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
    type: "EnrollNewStuSuccess",
    payload: data.teacher,
  });

} catch (error) {
  dispatch({
    type: "EnrollNewStuFailure",
    payload: error.response.data.message,
  });
}
}

//load teacher
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

//register teacher
export const registerTeacher =
  (name, subject, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        "https://college-attendence-backend-sp8j.vercel.app/api/v1/teacher/register",
        { name, subject, email, password },
        config
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.teacher,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
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

//fetch all students
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

//search student
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

//per student profile
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

//logout teacher
export const logoutTeacher = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(
      "https://college-attendence-backend-sp8j.vercel.app/api/v1/logout",
      config
    );

    dispatch({
      type: "LogoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};
