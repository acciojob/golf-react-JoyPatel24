import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };
    }

    buttonClickHandler() {
        // When the "Start" button is clicked, show the ball and add the event listener
        this.setState({ renderBall: true }, () => {
            this.addArrowKeyEventListener();
        });
    }

    addArrowKeyEventListener() {
        // Add an event listener for the right arrow key
        document.addEventListener('keydown', this.handleArrowKeyPress);
    }

    handleArrowKeyPress = (event) => {
        if (event.key === 'ArrowRight' && this.state.renderBall) {
            // Move the ball to the right by 5 pixels
            const currentLeft = parseInt(this.state.ballPosition.left);
            this.setState({
                ballPosition: { left: (currentLeft + 5) + 'px' }
            });
        }
    }

    componentWillUnmount() {
        // Remove the event listener when the component unmounts
        document.removeEventListener('keydown', this.handleArrowKeyPress);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div className="ball" style={this.state.ballPosition}></div>
                ) : (
                    <button onClick={() => this.buttonClickHandler()}>Start</button>
                )}
            </div>
        );
    }
}

export default App;
