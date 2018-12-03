import React from 'react'

import './index.scss'

export default class IframeReport extends React.Component {
  render() {
    return (
      <div className="iframe-range">
        <iframe width="100%" frameBorder="no" name="ocx" src="/static/iframe.html"></iframe>
      </div>
    )
  }
}