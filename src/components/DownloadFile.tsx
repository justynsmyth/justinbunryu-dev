import React from 'react';
import { Link } from 'react-router-dom';
export default function DownloadFile({
  children,
  link,
}: {
  children: React.ReactElement;
  link: string;
}) {
  const [downloaded, setDownloaded] = React.useState(false);

  function handleClick() {
    setDownloaded(true);
    const timer: number = window.setTimeout(() => setDownloaded(false), 2000);
  }

  return (
    <div className="copy-link-wrapper">
      <Link to={link} className="link" target="_blank" download onClick={handleClick}>
        {children}
      </Link>
      <span className="email-text">{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
    </div>
  );
}
