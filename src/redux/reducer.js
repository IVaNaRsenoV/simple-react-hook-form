const stepArray = [
  {
    id: 1,
    path: "/step1",
    way: "/step2",
    step: 1,
  },
  {
    id: 2,
    path: "/step2",
    way: "/step3",
    step: 2,
  },
  {
    id: 3,
    path: "/step3",
    way: "/result",
    step: 3,
  },
];

const initialState = {
  steps: stepArray,
  step1: "",
  step2: "",
  step3: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "STEP1":
      // debugger;
      return { ...state, step1: payload };
    case "STEP2":
      // debugger;
      return { ...state, step2: payload };
    case "STEP3":
      // debugger;
      return { ...state, step3: payload };
  }
  return state;
};
