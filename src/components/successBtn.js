import * as React from 'react';

export default function NavigateComponent({ link, text }) {
  return (
    <a href={link}>{text}</a>
  );
}
