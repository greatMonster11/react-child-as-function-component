import React from "react";

// const withAmount = currencyComponents =>
class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }
  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };
  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };
  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.render(this.state.amount)}
        {/* {currencyComponents.map(CurrencyComponent => (
            // this would be a scalar Component
            <CurrencyComponent amount={this.state.amount} />
          ))} */}
      </div>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
// const CurrenciesWithAmount = withAmount([Euro, Pound]);

// const App = () => <CurrenciesWithAmount />;

const App = () => (
  <Amount
    render={amount => (
      <>
        <Euro amount={amount} />
        <Pound amount={amount} />
      </>
    )}
  />
);
export default App;
