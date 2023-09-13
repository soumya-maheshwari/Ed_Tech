import { useState, useEffect } from 'react';

function useCounterAnimation(initialCount, targetCount, intervalTime) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count < targetCount) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [count, targetCount, intervalTime]);

  return count;
}

function Counter() {
  const count = useCounterAnimation(0, 650, 10);
  const count1 = useCounterAnimation(0, 350, 10);
  const count2 = useCounterAnimation(0, 250, 100);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Count1: {count1}</div>
      <div>Count2: {count2}</div>
    </div>
  );
}

export default Counter;
