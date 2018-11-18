import React from 'react'

const eventStyle = {
  display: 'flex',
  justifyContent: 'flex-start'
}
const liStyle = {
  marginRight: '20px'
}
export default class EventTest extends React.Component {
  constructor() {
    super()
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
  renderLi(data) {
    return Object.keys(data).map((item) =>
      <li style={liStyle} key={item.toString()}>
        {item}: {data[item]}
      </li>
    )
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
          { this.renderLi(this.state) }
        </ul>
      </div>
    )
  }
}