import React from 'react';

type Props = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
};

const Image: React.FunctionComponent<Props> = ({ src, alt, width, height }) => (
  <div className="sk-img-wrapper">
    <img className="sk-img" src={src} alt={alt} width={width} height={height} />
  </div>
);

export default Image;
