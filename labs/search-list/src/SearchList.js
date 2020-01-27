import React from "react";
import './App.css';

class SearchList extends React.Component {
    state = {
        lists: [
            {id: 0, text: "Google" },
            {id: 1, text: "Apple" },
            {id: 2, text: "Microsoft" },
            {id: 3, text: "IOS" },
            {id: 4, text: "Android" },
            {id: 5, text: "Gmail" }
        ],
        textSearch: ""
    }

    hendlerChange = e => {
        this.setState({textSearch: e.target.value})
    }

    render() { 
        const text = this.state.textSearch
        return (
            <div> 
                <div style={ {textAlign:"center"} }>
                    <input type="text" onChange={ this.hendlerChange } />
                </div>
                <div > 
                    <ul style={ {textAlign:"center"} }> 
                    { this.state.lists.map( item => { 
                        if ( text === "" || item.text.toUpperCase().includes(text.toUpperCase()) ){
                            return (
                                <li key={ item.id } >
                                    { item.text }
                                </li>
                            )
                        }else{
                            return undefined
                        }
                        } )} 
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchList