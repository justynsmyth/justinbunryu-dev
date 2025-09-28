import { ExternalLinkProps } from "../types/types"
import "./ExternalLink.css"

export default function ExternalLink({children, href, label}:ExternalLinkProps) {
    return (
        <a 
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
            className="external-link home-link"
            aria-label={label}
            >
            {children}
            {label && <span className="external-link-label">{label}</span>}
        </a>
    )
}