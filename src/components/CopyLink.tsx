import React from "react";

export default function CopyLink({children}:{children: React.ReactElement}) {
    const [copied, setCopy] = React.useState(false)
    const email = "jbusmith@umich.edu"

    async function handleClick() {
        try {
            await navigator.clipboard.writeText(email)
            setCopy(true)
            const timer: number = window.setTimeout(
                () => setCopy(false), 2000
            )

        } catch(error) {
            console.error("Failed to copy", error)
        }
    }
    
    return (
        <div className="copy-link-wrapper">
            <button onClick={handleClick} className="link">
                {children}
            </button>
            <span className="email-text">
                {copied ? "Copied!" : email}
            </span>
        </div>
    )
}