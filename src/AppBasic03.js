import React from 'react';

export default function AppBasic03() {
  const msg = '하이';
  let num = 55;

  return (
    <div>
      Hello React !!
      {msg} <br />
      {num} <br />
      {1 + +num + 100}
    </div>
  );
}
