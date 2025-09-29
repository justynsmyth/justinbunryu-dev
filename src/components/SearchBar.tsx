import { IoIosSearch } from "react-icons/io";
import { useRef } from "react"


export default function SearchBar({IconSize}:{IconSize: number}) {
    const inputRef = useRef<HTMLInputElement>(null)

    function openSearch() {
        inputRef.current?.focus()
    }

    return (
        <>
            <div className="search-wrapper" onClick={openSearch}>
                <IoIosSearch className="search-icon" size={IconSize} aria-hidden="true" />
                <input type="search" ref={inputRef} placeholder="Search" aria-label="Search" />
            </div>
        </>
    )
}