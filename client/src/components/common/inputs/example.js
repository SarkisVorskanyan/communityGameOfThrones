// const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [checked, setChecked] = useState(true);
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isFocusedEmail, setIsFocusedEmail] = useState(false);
//   const [isFocusedPass, setIsFocusedPass] = useState(false);


//   // Authorizing user in front
//   let validation = async () => {
//     let regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     if (!email || !password) {
//       setErrorMessage(REQUIRED);
//       setError(true);
//       return false;
//     } 
//     else if (!regx.test(email.trim())) {
//       setErrorMessage(EMAIL_ERROR);
//       setError(true);
//       return false;
//     }
//     else if (password.length < 6) {
//       setErrorMessage(PASSWORD_ERROR);
//       setError(true);
//       return false;
//     } else {
//       setError(false);
//       setErrorMessage(null);
//     }
//     return true;
//   };

//   // Authorizing user navigating to Account screen
//   const authenticate = () => {
//     validation().then((status) => {
//       status ? dispatch(login({ email, password })) : null;
//     });
//   };
// import React, { useEffect, useState } from 'react';
// import {
//   Keyboard,
//   Platform,
//   TouchableWithoutFeedback,
//   Linking,
//   Text,
//   View,
//   Image,
//   TouchableHighlight,
// } from 'react-native';
// import { Buffer } from 'buffer';
// import CheckBox from '@react-native-community/checkbox';
// import { useDispatch, useSelector } from 'react-redux';
// import LogoHeader from '../LoginHeader/LogoHeader';
// import HandleBackButton from '../../../Links/HandleBackButton';
// import SubmitButton from '../../../SubmitButton/SubmitButton';
// import AppTextInput from '../../../AppTextInput/AppTextInput';
// import { LoginScreenStyle } from './LoginScreenStyle';
// import {
//   EMAIL_ERROR,
//   PASSWORD_ERROR,
//   REQUIRED,
// } from '../../../../config/messages';
// import AnimatedHeader from '../AnimatedHeader/AnimatedHeader';
// import colors from '../../../../config/colors';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import { Encrypt } from '../../../../api/Hasher';
// import { GmailLogin } from '../../../../api/GmailLogin';
// import {
//   ANDROID_RELEASE_CLIENT_ID,
// } from '../../../../config/gmailInfo';
// import { AppTextInputStyle } from '../../../AppTextInput/AppTextInputStyle';
// import { setRememberMe } from '../../../../store/reducers/Storage_reducer';
// import { login } from '../../../../store/reducers/Auth_reducer';
// import { passLink } from '../../../../utils/PassLink';
// import { passwordReset } from '../../../../config/webworkURLs';
// import { register } from './../../../../config/webworkURLs';

// const LoginScreen = ({ navigation }) => {
//   HandleBackButton();

//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.auth);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [checked, setChecked] = useState(true);
//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isFocusedEmail, setIsFocusedEmail] = useState(false);
//   const [isFocusedPass, setIsFocusedPass] = useState(false);


//   // Authorizing user in front
  // let validation = async () => {
  //   let regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //   if (!email || !password) {
  //     setErrorMessage(REQUIRED);
  //     setError(true);
  //     return false;
  //   } 
  //   else if (!regx.test(email.trim())) {
  //     setErrorMessage(EMAIL_ERROR);
  //     setError(true);
  //     return false;
  //   }
  //   else if (password.length < 6) {
  //     setErrorMessage(PASSWORD_ERROR);
  //     setError(true);
  //     return false;
  //   } else {
  //     setError(false);
  //     setErrorMessage(null);
  //   }
  //   return true;
  // };

//   // Authorizing user navigating to Account screen
  // const authenticate = () => {
  //   validation().then((status) => {
  //     status ? dispatch(login({ email, password })) : null;
  //   });
  // };

