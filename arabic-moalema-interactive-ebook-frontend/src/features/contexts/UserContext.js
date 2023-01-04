import { createContext } from "react";

const userContext = createContext({
  USER: [
    {
      id: 0,
      name: "Praveen",
      email: "praveen@gmail.com",
      password: "123",
      confirmPassword: "123",
      StudentData: [{}],
    },
  ],

  STUDENT: [
    {
      id: "",
      name: "",
      Assignments: [{ content: "" }],
    },
  ],
});

export default userContext;
