import React from 'react'
import axios from 'axios'
import Coin from './Coin.jsx'
import IndexValue from './IndexValue.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      priceData: [],
      indexValue: 0
    }

    this.getPriceData = this.getPriceData.bind(this)
    this.calculateIndexValue = this.calculateIndexValue.bind(this)
  }

  componentDidMount() {
    this.getPriceData()
  }

  getPriceData() {
    axios.get('/api/getPrices')
      .then(data => {
        console.log('Got prices! ', data.data)
        this.setState({
          priceData: data.data
        }, () => {
          this.calculateIndexValue(this.state.priceData)
        })
      })
      .catch(err => {
        console.log('error sending price data to front end: ', err)
      })
  }

  calculateIndexValue(arr) {
    let value = 0
    let percentage = (arr.length / 100)

    for (let i = 0; i < arr.length; i++) {
      value += (arr[i].price_usd * percentage)
    }

    value = value.toFixed(2)

    this.setState({
      indexValue: value
    })
  }

  render() {

    return (

      <div className='container-fluid'>
        <IndexValue value={this.state.indexValue} />

        <div className='row'>
          {this.state.priceData.map((coin, key) => (
            <Coin coin={coin} key={coin.symbol} />
          ))}
        </div>
      </div>

    )
  }
}