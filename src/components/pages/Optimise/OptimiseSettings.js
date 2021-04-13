import React from 'react';
import Tickers from './Tickers';
import Axis from './Axis';

export default class OptimisePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickers: new Set(),
            x: 'standardDeviation',
            y: 'expectedDividendYield',
            z: 'expectedReturn',
            colour: 'priceToBook',
        };
    }

    handleChange = (e) => {
        if(e.target.name === 'tickers'){
            const tickers = this.state.tickers;
            tickers.add(e.target.value);

            const max = 3;
            if(tickers.length > max){
                this.props.displayError(`You can only add ${max} stocks to a portfolio.`);
            }else {
                this.setState({tickers: tickers});
            }
        }else {
            this.setState({[e.target.name]: e.target.value});
        }
    }

    removeTicker = (ticker) => {
        const tickers = this.state.tickers;
        tickers.delete(ticker);
        this.setState({tickers: tickers});
    }

    render = () => {
        const {tickers} = this.state;
        const {updateSettings} = this.props;
        return (
            <div className="settings grid-item">
                <h1>Settings</h1>

                <Tickers tickers={tickers} handleChange={this.handleChange} removeTicker={this.removeTicker}/>
                <Axis name="x" selected="0" handleChange={this.handleChange}/>
                <Axis name="y" selected="1" handleChange={this.handleChange}/>
                <Axis name="z" selected="2" handleChange={this.handleChange}/>
                {/* <Axis name="colour" selected="3" handleChange={this.handleChange}/> */}

                <button class="visualise-button" onClick={() => updateSettings({
                    tickers: tickers,
                    x: this.state.x,
                    y: this.state.y,
                    z: this.state.z,
                    // colour: this.state.colour,
                })}>Visualise</button>
            </div>
        );
    }
}