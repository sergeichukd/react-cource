import React from 'react'
import ReactDOM from 'react-dom'
import KanbanBoard from './components/kanban/KanbanBoard.jsx';

import cardList from './data/cardList'


ReactDOM.render(
  <KanbanBoard cards={cardList} />,
  document.getElementById('root')
)
