import React from 'react';
import './style.css';

export default function AppBasic09() {
  const myStyle = { fontSize: 50, color: 'red' };

  return (
    <div>
      <span style={{ fontSize: 50, color: 'red' }}>Hello</span> <br />
      <span style={myStyle}>Hello</span> <br />
      <span className="bold">Hello</span>
    </div>
  );
}
