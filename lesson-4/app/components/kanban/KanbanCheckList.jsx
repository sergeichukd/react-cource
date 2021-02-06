import React from 'react'

export default class KanbanCheckList extends React.Component {

  componentWillUnmount() {
    console.log('called componentWillUnmount')
  }

  render() {
    let tasks = this.props.tasks.map((task, index) => {
      return (
        <li key={index} className='check-list-task'>
          <input
            type="checkbox"
            defaultChecked={task.done}
          />
            &nbsp;
            {task.name}
        </li>
      )
    })

    return (
      <div className="check-list">
        <ul>{tasks}</ul>
      </div>
    )
  }
}
