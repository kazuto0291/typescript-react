import React from 'react';
import TaskItem from '../TaskItem/TaskItem'
import {Task} from '../../Types'

type Props = {
  tasks: Task[]
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>

}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {

  const handleDone = (task: Task) => {
    setTasks(prev => prev.map( t => 
      t.id === task.id
          ? { ...task, done: !task.done}
          : t
      ))
  }

  return (
    <div className="inner">
      {
        tasks.length <= 0 ? '登録されたTODOはありません。':
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </ul>
      }
    </div>
  )
}

export default TaskList
