
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(`DVA ERROR: `, err.message);
    },
  },
};
