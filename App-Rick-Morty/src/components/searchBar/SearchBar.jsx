import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchType, setSearchType] = useState("name");

   const handleChange = event => {
      const { value } = event.target;
      setSearchTerm(value);
   }

   const handleTypeChange = event => {
      setSearchType(event.target.value);
   }

   const handleSubmit = event => {
      event.preventDefault();
      if (searchTerm.trim()) {
         props.onSearch(searchTerm, searchType);
         setSearchTerm("");
      }
   }

   const handleKeyPress = event => {
      if (event.key === 'Enter') {
         handleSubmit(event);
      }
   }

   return (
      <div className="search-bar">
         <select
            value={searchType}
            onChange={handleTypeChange}
            className="search-select"
         >
            <option value="name">Name</option>
            <option value="id">ID</option>
            <option value="species">Species</option>
            <option value="status">Status</option>
         </select>
         <input
            value={searchTerm}
            type="text"
            name="search"
            id="search"
            placeholder={`Search by ${searchType}...`}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="search-input"
         />
         <button onClick={handleSubmit} className="search-btn">
            🔍
         </button>
      </div>
   );
}
