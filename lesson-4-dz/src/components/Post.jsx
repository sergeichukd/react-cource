import React from 'react'

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: false
    }
    this.toggleContent = this.toggleContent.bind(this)
  }

  toggleContent() {
    this.setState((prevState, prevProps) => {
      return { displayContent: !prevState.displayContent };
    })
  }

  render() {

    let postContent = null

    if (this.state.displayContent) {
      postContent = (
        <div className="post-content">
          <p style={{ whiteSpace: 'pre-wrap' }}>{ this.props.post.postContent }</p>
        </div>
      )
    } else {
      postContent = <p onClick={this.toggleContent}>Read content...</p>
    }

    return(
      <div className="post-container">
        <div className="post-header">
          <h2 onClick={this.toggleContent}>{this.props.post.postTitle}</h2>
          <p className='font-weight-lighter'>
            {this.props.post.createdAt}
            ,
            &nbsp;
            <a href={this.props.post.autorUrl}>{this.props.post.autorName}</a>
          </p>
        </div>
        {postContent}
      </div>
    )
  }
}
