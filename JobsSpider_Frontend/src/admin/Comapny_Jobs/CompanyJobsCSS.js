import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ubuntu",
  },

  box: {
    width: 1100,
    height: "90%",
    border: "1px solid #2c3e50",
    borderRadius: 5,
    padding: 15,
  },

  helperTextStyle: {
    color: "#d32f2f",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
    textAlign: "left",
    marginTop: "3px",
    marginBottom: "0",
  },

  roott: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ubuntu",
  },

  boxx: {
    width: 1000,
    height: "auto",
    border: "1px solid #2c3e50",
    borderRadius: 5,
    padding: 15,
  },
});

export { useStyles };
