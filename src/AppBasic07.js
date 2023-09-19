import React from 'react';

export default function AppBasic07() {
  let star = '';
  for (let i = 0; i < 5; i++) star += '★';
  return (
    <div>
      {star}
      <br />
      {star}
      <br />
      {star}
      <br />
    </div>
  );
}
