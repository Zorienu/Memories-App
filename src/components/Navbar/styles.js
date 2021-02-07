import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    flexWrap: "wrap",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    margin: "0 10px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    backgroundColor: "#5e35b1",
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 20px",
      justifyContent: "center",
    },
    heading: {
      fontSize: "40px",
    },
    profile: {
      alignItems: "center",
    },
  },
}));
