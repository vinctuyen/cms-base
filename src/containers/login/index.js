import React from "react";
import LoginComponet from "../../components/login";
import '../../theme/style.scss';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="panel">
        <LoginComponet />
      </div>
    );
  }
}
export default LoginContainer;
