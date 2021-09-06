import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    var axios = require("axios");
    var config = {
      method: "post",
      url: "https://10.252.12.19:9500/oauth2/token?grant_type=client_credentials",
      headers: {
        Authorization:
          "Basic SV90cTBkMFVaMGVHN3RZMWpaaUxpV2tPcXNNYTpxTzN2TDFxSjhFdE5XR1NlZHNNZ3VpR1lZZ3Nh",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <p>controller</p>
      </div>
    );
  }
}

export default App;
