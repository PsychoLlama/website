import React from 'react';

export default function Anchor(props) {
  const { rel = '' } = props;
  return <a {...props} rel={`noreferrer noopener ${rel}`} />;
}
