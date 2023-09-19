import React from 'react';

export default function AppBasic08() {
  function DrawStar(num) {
    let star = '';
    for (let i = 0; i < num; i++) star += '★';
    return star;
  }

  return (
    <div>
      {DrawStar(3)} <br />
      {DrawStar(4)} <br />
      {DrawStar(5)} <br />
    </div>
  );
}
