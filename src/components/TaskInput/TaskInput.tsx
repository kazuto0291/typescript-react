import React,{ useState } from 'react'
import {Task} from '../../Types'

const TaskInput :React.FC = () => {
  const [ inputTitle, setInputTitle] = useState('')
  return (
    <div className="input-from">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
        />
      </div>
    </div>
  )
}

export default TaskInput