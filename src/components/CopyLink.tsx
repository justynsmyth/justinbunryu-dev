import React from 'react';

export default function CopyLink({
  children,
  link,
}: {
  children: React.ReactElement;
  link: string;
}) {
  const [copied, setCopy] = React.useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(link);
      setCopy(true);
      const timer: number = window.setTimeout(() => setCopy(false), 2000);
    } catch (error) {
      console.error('Failed to copy', error);
    }
  }

  return (
    <div className="copy-link-wrapper">
      <button onClick={handleClick} className="link">
        {children}
      </button>
      <span className="email-text">{copied ? 'Copied!' : link}</span>
    </div>
  );
}
