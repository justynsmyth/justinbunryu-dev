import React from 'react';

export default function HoverAction({
  children,
}: {
  children: (isHovering: boolean) => React.ReactElement;
}) {
  const [isHovering, setHovering] = React.useState(false);

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      {children(isHovering)}
    </div>
  );
}
