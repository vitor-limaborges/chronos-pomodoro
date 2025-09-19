import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

export function Cycles() {
  const { state } = useTaskContext();

  const cyclesStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'Ciclo de foco',
    shortBreakTime: 'Ciclo de descanso curto',
    longBreakTime: 'Ciclo de descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cyclesStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType]}`}
              title={`${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
