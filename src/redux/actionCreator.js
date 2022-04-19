export const actionCreatorStep = (step, data) => {
  return { type: `STEP${step}`, payload: data };
};
