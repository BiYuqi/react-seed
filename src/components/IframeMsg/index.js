import React from 'react'

import IframeReport from './iframe-report'
import IframeRender from './iframe-render'

import './index.scss'

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pubSub: '暂无消息',
      postMessage: '暂无消息',
      date: Date.now()
    }
  }
  componentDidMount() {
    // 测试发布订阅
    window.$event.listen('iframe-event', (ee) => {
      this.setState({
        pubSub: ee,
        date: Date.now()
      })
    })
    // 测试postMessage
    window.addEventListener('message', (event) => {
      if (event.data.type === 'iframe-post-message') {
        this.setState({
          postMessage: event.data.msg,
          date: Date.now()
        })
      }
    })
    // 测试获取元素
    // setTimeout(() => {
    //   console.log(window.frames['ocx'], 'ocx对象')
    //   // window.frames['ocx'].window.parent.$event.off('btn-test')
    //   console.log(window.frames['ocx'].document.querySelector('#test'))
    // }, 200)
  }
  render() {
    return (
      <div className="iframe-page">
        <IframeReport />
        <IframeRender
          pubSub={this.state.pubSub}
          postMessage={this.state.postMessage}
          date={this.state.date}/>
      </div>
    )
  }
}