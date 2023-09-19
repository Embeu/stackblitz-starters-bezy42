import React from 'react';

export default function AppBasic08() {
  function DrawStar(num) {
    let star = '';
    for (let i = 1; i < num + 1; i++) {
      star += '★';
    }
    return star;
  }

  let a = 7;

  return (
    <div>
      {DrawStar(3)} <br />
      {DrawStar(4)} <br />
      {DrawStar(5)} <br />
      {DrawStar(6)} <br />
      {DrawStar(5)} <br />
      {DrawStar(4)} <br />
      {DrawStar(3)} <br />
      <br />
      {a == 7 ? 'a' : 'b'}
    </div>
  );
}
