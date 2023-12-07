import { Component } from "react";

class CasePack extends Component {
  state = {
    casePackQTY: null,
  };

  componentDidMount() {
    this.fetchData();

  }

  componentDidUpdate(prevProps, prevState) {


  }

  fetchData = () => {
    const baseUrl = "https://licenseplate-server.onrender.com";
    const newItemNumber = localStorage.getItem("itemNumber");

    fetch(`${baseUrl}/getData?itemNumber=${newItemNumber}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ casePackQTY: data.Case_Pack_QTY });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };



  render() {
    return (
      <div>
        {/* Conditionally render the li only if casePackQTY has a value */}
        {this.state.casePackQTY !== null && (
          <div>{this.state.casePackQTY}</div>
        )}
      </div>
    );
  }
}

export default CasePack;