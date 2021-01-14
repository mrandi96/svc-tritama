import React, { Component } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import { TextField } from 'rn-material-ui-textfield';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux'
import { Styles } from './LoginStyle';
import { Colors, Images } from '../../Themes';
import { LoadingSpin } from '../../Components/Loading/LoadingSpin'
import LoginActions from '../../Redux/LoginRedux'

import { validateEmail } from '../../Fixtures/Validation'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSecure: true,
      errMessageUsername: null,
      errMessagePassword: null,
      isValidUsername: false,
      isValidPassword: false
    };

    this.textInput = null

  }

  componentDidMount() {
    SplashScreen.hide();
  }

  setTextInputRef = element => {
    this.textInput = element
  };

  focusPassword = () => {
    // Focus the text input using the raw DOM API
    if (this.textInput) this.textInput.focus()
  }


  onChangeText = type => (value) => {
    this.setState({
      [type]: value
    }, this.checkValue(type, value));
  };

  checkValue = (type, value) => {
    // const {
    //   LOGIN: {
    //     USERNAME,
    //     PASSWORD
    //   }
    // } = Constants;

    if (type === 'username') {
      const isEmail = validateEmail(value);
      if (isEmail) {
        this.setState({ errMessageUsername: null, isValidUsername: true });
      } else {
        this.setState({ errMessageUsername: 'Invalid email format', isValidUsername: false });
      }
    }

    if (type === 'password') {
      if (value && value.length >= 6) {
        this.setState({ errMessagePassword: null, isValidPassword: true });
      } else {
        this.setState({ errMessagePassword: 'Password too short', isValidPassword: false });
      }
    }
  };

  isFormFilled = () => {
    const { username, password } = this.state;
    const forms = { username, password };
    let filled = true;

    Object.keys(forms).map((form) => {
      if (!forms[form]) {
        filled = false;
      }
    });

    return filled;
  };

  checkUserInput = () => {
    const filled = this.isFormFilled();

    if (!filled) {
      return true;
    } else {
      const { isValidPassword, isValidUsername } = this.state;
      return !(isValidPassword && isValidUsername);
    }
  };

  changeMaskPassword = () => {
    const { isSecure } = this.state;
    this.setState({ isSecure: !isSecure });
  };

  toggleFailureOverlay = () => {
    const { failureOverlay } = this.state;
    this.setState({
      failureOverlay: !failureOverlay
    });
  };

  login = () => {
    const {
      username,
      password,
      isValidUsername,
      isValidPassword
    } = this.state;

    if (isValidUsername && isValidPassword) {
       this.props.loginRequest(username, password)
    }
  };

  renderPasswordAccessory = () => {
    const { isSecure } = this.state;
    return (
      <Pressable
        onPress={this.changeMaskPassword}
        style={Styles.maskPasswordContainer}
      >
        {
          isSecure ?
            (
              <Image
                source={Images.maskPassword}
                style={Styles.maskPassword}
              />
            ) : (
              <Image
                source={Images.unmaskPassword}
                style={Styles.maskPassword}
              />
            )
        }
      </Pressable>
    );
  };

  render() {
    const {
      password,
      isSecure,
      errMessageUsername,
      errMessagePassword,
      username
    } = this.state;

    const disableLoginButton = this.checkUserInput();

    const { loading } = this.props
    if (loading) {
      return <LoadingSpin />;
    }

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.inner}>
            <Image
              source={Images.tritamaLogoBig}
              style={Styles.logo}
            />
            <TextField
              titleTextStyle={Styles.fontStd}
              labelTextStyle={Styles.fontStd}
              fontSize={14}
              label={'Email'}
              value={username}
              returnKeyType='done'
              onChangeText={this.onChangeText('username')}
              onEndEditing={this.focusPassword}
              error={errMessageUsername}
              tintColor={Colors.pictonBlue}
            />
            <TextField
              ref={this.setTextInputRef}
              fontSize={14}
              secureTextEntry={isSecure}
              label={'Password'}
              value={password}
              onChangeText={this.onChangeText('password')}
              returnKeyType='done'
              returnKeyLabel='Done'
              onSubmitEditing={this.login}
              renderAccessory={this.renderPasswordAccessory}
              error={errMessagePassword}
              tintColor={Colors.pictonBlue}
            />
            <Pressable
              style={Styles.buttonLogin}
              onPress={this.login}
              disabled={disableLoginButton}>
              <Text style={Styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.account.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => dispatch(LoginActions.loginRequest(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

