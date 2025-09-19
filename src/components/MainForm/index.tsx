import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Por favor, digite uma tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDade: Date.now(),
      completeDate: null,
      interrruptDate: null,
      duration: state.config[nextCycleType],
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        type: nextCycleType,
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(tasks => {
          if(prevState.activeTask?.id === tasks.id){
            return {
              ...tasks,
              interrruptDate: Date.now(),
            };
          }
          return tasks;
        })
      };
    });
  }

  return (
    <form onSubmit={handleCreateTask} className='form' action=''>
      <div className='formRow'>
        <Input
          id='task'
          type='text'
          labelText='Task'
          placeholder='Digite sua tarefa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalor é de 25min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <Button
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='submit_button'
          />
        )}

        {!!state.activeTask && (
          <Button
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='interrupt_button'
          />
        )}
      </div>
    </form>
  );
}
