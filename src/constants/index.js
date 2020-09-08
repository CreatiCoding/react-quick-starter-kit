let mode = process.env.REACT_APP_MODE || "DVLP";

export default Object.freeze({
  ENV: Object.freeze({
    BASE_URL: process.env[`REACT_APP_${mode}_BASE_URL`],
  }),
});
