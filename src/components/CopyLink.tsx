import React from 'react';

interface CopyLinkProps {
  children: React.ReactElement;
  link: string;
  hoverHint?: string;
}

export default function CopyLink({ children, link, hoverHint }: CopyLinkProps) {
  const [copied, setCopied] = React.useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy', error);
    }
  }

  return (
    <div className="copy-link-wrapper">
      <button onClick={handleClick} className="link">
        {children}
      </button>
      <span className="email-text">{copied ? 'Copied!' : hoverHint ?? link}</span>
    </div>
  );
}
