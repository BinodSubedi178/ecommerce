import { MdOutlineCancel } from "react-icons/md";
import './Search.css'
export const Search = ({ handleSearchCross }) => {
    return (

        <div className="search-wrapper">
            <div className="close-icon" onClick={handleSearchCross}>
                <MdOutlineCancel />
            </div>
            <span className="search">
                <input type="text" placeholder="Search store" />
                <button>SEARCH</button>
            </span>
            <hr className="search-underline" />
        </div>
    )
}
