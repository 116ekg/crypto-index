import React from 'react'

export default class Coin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      symbol: '',
      name: '',
      price: 0,
      volume: 0
    }
  }

  componentDidMount() {
    this.setState({
      symbol: this.props.coin.symbol,
      name: this.props.coin.name,
      price: parseFloat(this.props.coin.price_usd),
      volume: parseFloat(this.props.coin["24h_volume_usd"])
    })
  }

  render() {

    let positiveChange = {
      color: 'green'
    }

    let negativeChange = {
      color: 'red'
    }

    return (

      <div className='col-2'>
        <div className='card card-custom'>
          <div className='card-block'>
            <h3 className='card-title'>{this.props.coin.name}</h3>
            <p className='card-text'>${this.props.coin.price_usd}</p>

            <p className='card-text' style={parseFloat(this.props.coin.percent_change_24h) > 0 ? positiveChange : negativeChange}>
              24 hours: {parseFloat(this.props.coin.percent_change_24h)}%
            </p>

            <p className='card-text' style={parseFloat(this.props.coin.percent_change_7d) > 0 ? positiveChange : negativeChange}>
              7 days: {parseFloat(this.props.coin.percent_change_7d)}%
            </p>
          </div>
        </div>
      </div>

    )
  }
}