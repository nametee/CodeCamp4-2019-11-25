import React from "react";

class SlideShow extends React.Component {
    state = {
        items: [
            { id: 0, url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
            { id: 1, url: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
            { id: 2, url: "https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
            { id: 3, url: "https://images.unsplash.com/photo-1517771778436-39f5763f5270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}
        ],
        currentIndex: 0
    }

    handlerNext = () => {
        this.setState(state => ({
            currentIndex:  state.currentIndex === state.items.length -1 ?  0 : state.currentIndex + 1
        }))
    }
    handlerPrevious = () => {
        this.setState(state => ({
            currentIndex:  state.currentIndex === 0 ? state.items.length - 1  : state.currentIndex - 1
        }))
    }

    render() {
        const current = this.state.currentIndex
        const max = this.state.items.length
        console.log(current + " " + max )
        return (
            <div style={ { textAlign: "center" } } >
                <div>
                    <img  
                        style={ { maxHeight:"400px"} } 
                        src={ this.state.items[current].url }
                    />
                </div>
                <div > 
                    <button disabled={current == 0 } onClick={ this.handlerPrevious }> Previous </button>
                    <button disabled={current == max -1 } onClick={ this.handlerNext }> Next </button>
                </div>
            </div>
        )
    }
}

export default SlideShow