import React from 'react';

const SectionHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={`section-header unselectable ${className}`}>{children}</h2>;

export default SectionHeader;
