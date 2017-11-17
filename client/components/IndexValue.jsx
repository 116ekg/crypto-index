import React from 'react'

export default class IndexValue extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className='row justify-content-center'>
        <div className='col-6 text-center'>
          <h1>
            Current index value: {this.props.value}
          </h1>
        </div>
      </div>

    )
  }
}