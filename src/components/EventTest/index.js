import React from 'react'

const eventStyle = {
  display: 'flex',
  justifyContent: 'flex-start'
}
const liStyle = {
  marginRight: '20px'
}
export default class EventTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      clientX: 0,
      clientY: 0,
      tagName: ''
    }
  }
  handleClick = (e) => {
    this.setState({
      type: e.type,
      clientX: e.clientX,
      clientY: e.clientY,
      tagName: e.target.tagName.toLowerCase()
    })
  }
  render() {
    return (
      <div className="react-row" style={eventStyle}>
        <button
          className="btn"
          onClick={this.handleClick}
          style={{marginRight: '20px'}}>
          测试点击事件
        </button>
        <ul className="flex-center">
          <li style={liStyle}>Type: {this.state.type}</li>
          <li style={liStyle}>clientX: {this.state.clientX}</li>
          <li style={liStyle}>clientY: {this.state.clientY}</li>
          <li style={liStyle}>tagName: {this.state.tagName}</li>
        </ul>
      </div>
    )
  }
}