const stepArray = [
  {
    id: 1,
    path: "/step1",
    way: "/step2",
    step: "Email",
    type: "email",
  },
  {
    id: 2,
    path: "/step2",
    way: "/step3",
    step: "Password",
    type: "password",
  },
  {
    id: 3,
    path: "/step3",
    way: "/result",
    step: "Confirm password",
    type: "password",
  },
];

const initialState = {
  steps: stepArray,
  step: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "STEP":
      debugger;
      return { ...state, step: payload };
  }
  return state;
};
