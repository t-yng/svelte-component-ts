import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import Counter from 'svelte-component-ts/Counter.svelte';

const Home: NextPage = () => {
  const counterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (counterContainerRef.current == null) return;

    const counter = new Counter({
      target: counterContainerRef.current
    });

    return () => counter.$destroy();
  }, []);

  return (
    <div>
      <main>
        <div ref={counterContainerRef} />
      </main>
    </div>
  );
};

export default Home;
