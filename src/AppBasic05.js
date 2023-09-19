import React from 'react';

export default function AppBasic05() {
  let sum = 0;
  let a = 100;
  for (let i = 1; i <= 10; i++) sum += i;

  return (
    <div>
      합 : {sum} <br />
      {(a * (a + 1)) / 2}
    </div>
  );
}
