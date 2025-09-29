import { Link, useLocation } from "react-router-dom"
import { InternalLinkProps } from "../types/types"

export default function InternalLink({ children, targetId, label }: InternalLinkProps) {
  const location = useLocation()
  const isHome = location.pathname === "/"

  if (isHome) {
        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <a href={`#${targetId}`} onClick={handleClick} aria-label={label} className="link">
            {children}
            {label && <span className="link-label">{label}</span>}
        </a>
    )
  }

  // Not on homepage
  return (
    <Link to={`/#${targetId}`} aria-label={label} className="link">
      {children}
    </Link>
  )
}