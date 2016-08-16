import React from 'react'

export class Me extends React.Component {
  render() {
    var imgUrl = '../images/umbrellas.jpg'
    var divStyle = {
      backgroundImage: "url(('+ imgUrl +')"
    }
    return (<div style={divStyle}>Hello</div>)
  }
}

export default Me;
