import { Component } from "react";


class itemsku extends Component {

    constructor(){
        super();
        this.state = {
            skuName: [],
        };
    }


   
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
                this.setState({ skuName: data });

                
                
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    render() {

        return (
            <div>
                <div>{this.state.skuName.Item_Name}</div>
            </div>
        )
    }
}

export default itemsku;