import React from 'react';

export default function Anchor(props: React.ComponentPropsWithoutRef<'a'>) {
  const { rel = '' } = props;
  return <a {...props} rel={`noreferrer noopener ${rel}`} />;
}
