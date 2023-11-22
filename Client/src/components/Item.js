import { Component } from "react";

class item extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        fetch('/sku/items')
        .then(res => res.json())
        .then(item => {
            this.setState({ items: item});
        })
    }


    render(){
        return(
           
           <div>
            
            {
                this.state.items.map(item =>(
                    <div> Item {item.item}, GTIN: {item.gtin}</div>
                ))
            }
           </div>

        )
    }
}

export default item;