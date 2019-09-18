import React, { Component } from 'react'
//引入样式
import "./Move.less"
export default class Move extends Component {
  
    render() {
        //解构数据
        let { img, show, url, hideMovies, icktRef} = this.props
        return (
            <div onTouchEnd={e => hideMovies(e)} className="ickt-movie" style={{
                lineHeight: window.innerHeight + 'px',
                display: show ? '' : 'none'
            }}>
                <video ref={icktRef} poster={img} autoPlay controls src={url}></video>
            </div>
        )
    }
}
