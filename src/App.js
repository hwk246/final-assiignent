import React from "react";
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, names: [] };
  }

  async componentDidMount() {
    const data = await fetch("http://localhost:3003/names");
    const mockdata = await data.json();

    this.setState({ names: mockdata });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  handlesick = () => alert("hall0");

  render() {
    return this.state.loading ? (
      "........loading"
    ) : (
      <div>
        <Home sick={this.handlesick} names={this.state.names} />
      </div>
    );
  }
}

export default App;
