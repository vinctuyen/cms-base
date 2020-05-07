import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from "@material-ui/core";
import "./style.scss";

function LoginComponent() {
  const [islogin, setIsLogin] = useState(false);
  const [inputAcc, setInputAcc] = useState("");
  const [inputPass, setInputPass] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, []);

  const loadingUser = useSelector(state => state.loadingUser);
  const user = useSelector(state => state.users);

  function handleClickLogin() {
    if (inputAcc === user.name && inputPass === user.pass) {
      sessionStorage.setItem("user", "true");
      setIsLogin(true);
    } else {
      alert("sai tai khoan hoac mat khau");
      setInputAcc("");
      setInputPass("");
    }
  }

  function handleOnPressEnter(e) {
    if (e.key === "Enter") {
      handleClickLogin();
    }
  }


  if (islogin) {
    return <Redirect to="/layout" />;
  } else
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <form className={"login-form"} noValidate id="formTest">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="login-input"
            value={inputAcc}
            onInput={e => setInputAcc(e.target.value)}
            onKeyPress={handleOnPressEnter}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="login-input"
            value={inputPass}
            onInput={e => setInputPass(e.target.value)}
            onKeyPress={handleOnPressEnter}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                className="login-checkbox"
              />
            }
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
            onClick={handleClickLogin}
            disabled={loadingUser}
            
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    );
}

export default LoginComponent;

// class LoginComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputAcc: "",
//       inputPass: "",
//       islogin: false
//     };
//   }

//   componentDidMount = () => {
//     this.props.userStore();
//   };

//   handleClickLogin = () => {
//     if (
//       this.state.inputAcc === this.props.data.users.name &&
//       this.state.inputPass === this.props.data.users.pass
//     ) {
//       sessionStorage.setItem("user", "true");
//       this.setState({ islogin: true });
//     } else {
//       alert("sai tai khoan hoac mat khau");
//       this.setState({ inputAcc: "", inputPass: "" });
//     }
//   };

//   handleOnPressEnter = e => {
//     if (e.key === "Enter") {
//       this.handleClickLogin();
//     }
//   };

//   render() {
//     const { islogin } = this.state;
//     if (islogin) {
//       return <Redirect to="/layout" />;
//     }
//     return (
//       <div className="login-page">
//         <h1>Login Page</h1>
//         <form className={"login-form"} noValidate id="formTest">
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             className="login-input"
//             value={this.state.inputAcc}
//             onInput={e => this.setState({ inputAcc: e.target.value })}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             className="login-input"
//             value={this.state.inputPass}
//             onInput={e => this.setState({ inputPass: e.target.value })}
//             onKeyPress={this.handleOnPressEnter}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 value="remember"
//                 color="primary"
//                 className="login-checkbox"
//               />
//             }
//             label="Remember me"
//           />
//           <Button
//             // type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="login-button"
//             onClick={this.handleClickLogin}
//             disabled={this.props.loadingUser}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     );
//   }
// }

// let mapStateToProps = state => {
//   return {
//     loadingUser: state.loadingUser,
//     data: state
//   };
// };

// let mapDispatchToProps = dispatch => {
//   return {
//     userStore: () => dispatch({ type: "GET_USER" })
//   };
// };

// LoginComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginComponent);

// export default injectIntl(LoginComponent);
