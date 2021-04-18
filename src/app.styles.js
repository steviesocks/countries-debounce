import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  app: {
    color: "white",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#282c34",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    marginBottom: "-100px",
  },
  footer: {
    minHeight: "10vh",
    opacity: 0.7,
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  }
});

export default useStyles;
