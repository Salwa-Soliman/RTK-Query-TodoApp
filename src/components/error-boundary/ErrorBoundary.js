import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) {
      return <>{this.props.children}</>;
    }
    return (
      <div className="error-boundary">
        <p>
          Something went wrong🤔! .. If you haven't started server yet,
          <br /> <span>open new terminal & follow these steps</span>
        </p>
        <ul className="error-list">
          <li>
            <h4>Make Sure you have json-server installed in your machine</h4>
            <small>json-server -v</small>
          </li>
          <li>
            <h4>
              If you got 'json-server' is not recognized as an internal or
              external command, run
            </h4>
            <small>npm install -g json-server</small>
          </li>
          <li>
            <h4>Then, open server .. I use PORT:3020 to run Server</h4>
            <small>json-server --watch data/db.json --port 3020</small>
          </li>
          <li>
            <h4>
              Now🚀, Server is ready to use.{" "}
              <a
                href="http://localhost:3020/todos"
                target={"_blank"}
                rel="noreferrer"
              >
                Click here
              </a>{" "}
              if you want to check it
            </h4>
          </li>
          <li>
            <h4>Finally🙌, reload this page to get started with the app</h4>
          </li>
        </ul>
      </div>
    );
  }
}
