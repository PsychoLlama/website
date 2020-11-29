import React from 'react';

export default function Anchor(props) {
  // eslint-disable-next-line react/prop-types
  const { rel = '' } = props;
  return <a {...props} rel={`noreferrer noopener ${rel}`} />;
}
