import React from 'react'

export default class IframeReport extends React.Component {
  render() {
    return (
      <div className="iframe-render">
        <h3>我是Iframe渲染数据组件，我来监测iframe上传的数据</h3>
        <div className="render-area">
          <h3>发布订阅模式: </h3>
          <div className="msg-item">
            <h6>{ this.props.pubSub }</h6>
            <span>Update At: { this.props.date }</span>
          </div>
        </div>
        <div className="render-area">
          <h3>PostMessage模式:</h3>
          <div className="msg-item">
            <h6>{ this.props.postMessage}</h6>
            <span>Update At: { this.props.date }</span>
          </div>
        </div>
      </div>
    )
  }
}