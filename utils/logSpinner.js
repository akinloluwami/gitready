const frames = ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"];

const logSpinner = (text) => {
  let i = 0;
  const spinnerInterval = setInterval(() => {
    process.stdout.write(`\r${frames[i]} ${text}`);
    i = (i + 1) % frames.length;
  }, 200);

  return () => {
    clearTimeout(spinnerInterval);
    process.stdout.write(
      `\r${" ".repeat(frames[frames.length - 1].length)}\r${text}`
    );
  };
};

// module.exports = logSpinner;
export default logSpinner;
