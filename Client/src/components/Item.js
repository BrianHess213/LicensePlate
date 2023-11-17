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
           
           <ul>
            Item SKU
            {
                this.state.items.map(item =>(
                    <li> Item {item.item}</li>
                ))
            }
           </ul>

        )
    }
}

export default item;