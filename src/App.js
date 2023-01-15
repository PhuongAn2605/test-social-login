import React, { useCallback, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { LoginSocialGoogle, IResolveParams, LoginSocialFacebook, LoginSocialInstagram } from "reactjs-social-login";
import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";

function App() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);
  const REDIRECT_URI =
    "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";

    // const REDIRECT_URI_1 =
    // "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <LoginSocialGoogle
            client_id={
              "921819347049-07nlmbb1s2qcv5rmm8eer537th3sjajq.apps.googleusercontent.com" ||
              ""
            }
            onLoginStart={onLoginStart}
            redirect_uri={REDIRECT_URI}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <LoginSocialFacebook
          appId={'725905365523007' || ''}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialInstagram
          client_id={'1137011557000478' || ''}
          client_secret={'bc788de6768059d749f32e91c0a409b0' || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
