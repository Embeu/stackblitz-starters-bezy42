import React from 'react';

export default function AppDemo() {
  let title = 'u4Team';
  let image = 'back.jpg';

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="배경이미지" />
    </div>
  );
}
