import React from 'react';

export const HoverContext = React.createContext<{ isHovering: boolean }>({ isHovering: false });

export default function HoverAction({ children }: { children: React.ReactElement }) {
  const [isHovering, setHovering] = React.useState(false);

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <HoverContext.Provider value={{ isHovering }}>{children}</HoverContext.Provider>
    </div>
  );
}
