import { ExternalLinkProps } from '../types/types';
import '../css/Link.css';

export default function ExternalLink({ children, href, label }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link" aria-label={label}>
      {children}
    </a>
  );
}
