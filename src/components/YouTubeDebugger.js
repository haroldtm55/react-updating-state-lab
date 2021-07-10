// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  handleClick = (className) => {
    if (className === 'bitrate') {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12,
        }
      })
    }
    if (className === 'resolution') {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })      
    }
  }
  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={()=>this.handleClick('bitrate')}></button>
        <button className='resolution' onClick={()=>this.handleClick('resolution')}></button>
      </div>
    )
  }
}