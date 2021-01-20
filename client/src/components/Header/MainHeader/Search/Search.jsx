import React from 'react';

const Search = () => (
  <div className="pre-search-contain">
    <div className="pre-search-input-box" type="search">
      <input type="text" id="VisualSearchInput" className="pre-search-input" name="search" autocomplete="off" data-var="vsInput" tabindex="0" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false">
      </input>
      <button className="pre-clear-search" data-var="vsClearSearch" aria-label="Reset Search">
        <svg className="search-clear-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
          <path d="M22 20H7.3c-.3 0-.6-.1-.8-.4l-5.3-7c-.3-.4-.3-.9 0-1.2l5.3-7c.2-.3.5-.4.8-.4H22c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1zM7.8 18H21V6H7.8l-4.6 6 4.6 6zm8.2-3c-.3 0-.5-.1-.7-.3L14 13.4l-1.3 1.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.3-1.3-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3 1.3-1.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L15.4 12l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z"></path>
        </svg>
      </button>
      <button className="pre-search-btn" data-var="vsButton" aria-label="Search">
        <svg className="pre-search-input-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
          <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z">
          </path>
        </svg>
      </button>
    </div>
    <button type="submit" className="pre-close-search" data-var="vsCloseSearch" aria-label="Close Search">
      <svg class="pre-search-input-icon" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z">
        </path>
      </svg>
    </button>
  </div>
);

export default Search;