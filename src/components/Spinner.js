import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
 

  render() {
    return (
      <div  className=' container d-flex justify-content-between'>
         <img src={loading} alt="loading"/>
      </div>
    )
  }
}
