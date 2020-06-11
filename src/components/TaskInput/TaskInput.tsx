import React,{ useState } from 'react'
import {Task} from '../../Types'

type Props = {
  tasks: Task[]
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>
}


const TaskInput :React.FC<Props> = ({ tasks, setTasks}) => {
  const [ inputTitle, setInputTitle] = useState('')
  const [ count, setCount] = useState(tasks.length + 1)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () {
    
  }
  return (
    <div className="input-from">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button className="btn is-primary">追加</button>
      </div>
    </div>
  )
}

export default TaskInput