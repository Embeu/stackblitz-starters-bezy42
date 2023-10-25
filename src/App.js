import React from 'react';
import './style.css';
import { useState } from 'react';

import A1 from './AppBasic01';
import A2 from './AppBasic02';
import A3 from './AppBasic03';
import A4 from './AppBasic04';
import A5 from './AppBasic05';
import A6 from './AppBasic06';
import A7 from './AppBasic07';
import A8 from './AppBasic08';
import A9 from './AppBasic09';
import A10 from './AppDemo';

export default function App() {
  const database = [
    { title: '애니메이션', images: ['./back.png', './back.png', './back.png'] },
  ];

  return (
    <div>
      {database.map((x) => (
        <ImageView title={x.title} images={x.images} />
      ))}
    </div>
  );
}

const ImageView = ({ title, images }) => {
  return (
    <div>
      <div>{title}</div>
      {images.map((x) => (
        <ImageCss src={x} />
      ))}
    </div>
  );
};

const ImageCss = ({ src }) => {
  const [num, setNum] = useState(1);
  console.log(src);
  return (
    <span>
      <img
        src={src}
        alt="nono"
        onClick={() => setNum(num * -1)}
        style={{ filter: num > 0 ? blur('5px') : blur('0') }}
      />
    </span>
  );
};
