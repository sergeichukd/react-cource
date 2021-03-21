import React from 'react'

export default class FooterColumn extends React.Component {
  render() {

    const rows = this.props.data.content.map((row, index) => {
      return <a className='footer-row' key={index} href={row.href}>
        {row.text}
      </a>
    })
    return <div className="footer-column">
      <div className="footer-column-header">
        {this.props.data.title}
      </div>
      <div className="footer-column-content">
        {rows}
      </div>
    </div>
  }
}
