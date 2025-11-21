import Link from 'next/link';
import React from 'react';

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className='mt-10'>
        <li className='p-t text-blue-400'>
          <Link href='/Dashboard/users/1'>User 1</Link>
        </li>
        <li className='p-t text-blue-400'>
          <Link href='/Dashboard/users/2'>User 2</Link>
        </li>
        <li className='p-t text-blue-400'>
          <Link href='/Dashboard/users/'>User 3</Link>
        </li>
        <li className='p-t text-blue-400'>
          <Link href='/Dashboard/users/'>User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Users;
