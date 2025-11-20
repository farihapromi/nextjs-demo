import React from 'react';
import Hello from '@/app/components/Hello';

const Home = () => {
  console.log('What type of component');
  return (
    <main>
      <div className='text-5xl'>Welcome to Next.js</div>
      <Hello />
    </main>
  );
};

export default Home;
