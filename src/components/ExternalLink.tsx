import React from 'react';

export function ExternalLink(props: React.ComponentPropsWithoutRef<'a'>) {
  const { rel = '' } = props;
  return <a {...props} rel={`noreferrer noopener ${rel}`} />;
}
