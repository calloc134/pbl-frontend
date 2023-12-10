// setTimeoutのラッパー関数
const waitTime = async (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export { waitTime };
