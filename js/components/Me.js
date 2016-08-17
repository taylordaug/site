import React from 'react'

export class Me extends React.Component {
  render() {
    var imgUrl = '../images/umbrellas.jpg'
    var divStyle = {
      backgroundImage: "url(('+ imgUrl +')",
      width: "1000px",
      height: "50px",
    }
    return (<div style={divStyle}>Hello</div>)
  }
}

export default Me;
