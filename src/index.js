import React from 'react'
import ReactDOM from 'react-dom'

import Event from 'utils/pub-sub'

import IframeReport from '@/components/IframeReport'
import IframeRender from '@/components/IframeRender'
import EventTest from '@/components/EventTest'

import './index.scss'

window.$event = Event

class HomeIndex extends React.Component {
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
    Event.listen('iframe-event', (ee) => {
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
      <div className="home-page">
        <h2 className="home-title">React从零搭建项目&&入门Demo</h2>
        <div className="home-layout react-row">
          <IframeReport />
          <IframeRender
            pubSub={this.state.pubSub}
            postMessage={this.state.postMessage}
            date={this.state.date}
            />
        </div>
        <EventTest />
      </div>
    )
  }
}
ReactDOM.render(<HomeIndex />, document.getElementById('app'))