import ora from "ora";

const logSpinner = (text: string) => {
  ora(text).start();
};

export default logSpinner;
