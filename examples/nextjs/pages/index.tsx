import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Counter from 'svelte-component-ts/Counter.svelte';

const INITIAL_COUNT = 5;

const Home: NextPage = () => {
  const [counter, setCounter] = useState<Counter | null>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (counterContainerRef.current == null) return;

    const counter = new Counter({
      target: counterContainerRef.current,
      props: {
        initial: INITIAL_COUNT
      }
    });
    setCounter(counter);

    return () => counter.$destroy();
  }, []);

  const handleClickReset = () => {
    counter?.reset();
  };

  return (
    <div>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'fit-content'
        }}
      >
        <div ref={counterContainerRef} />
        <button style={{ marginTop: 10 }} onClick={handleClickReset}>
          Reset
        </button>
      </main>
    </div>
  );
};

export default Home;
