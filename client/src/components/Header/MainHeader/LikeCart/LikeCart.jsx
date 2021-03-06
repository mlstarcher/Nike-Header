import React from 'react';

const LikeCart = () => (
  <div className="ta-sm-r pt3-lg pt2-sm flx-gro-lg-0 flx-gro-lg-1 d-sm-ib">
    <a aria-label="Favorites" title="Favorites" data-var="favoritesLink" data-type="click_navShortcut" data-path="favorites" className="pre-btn-header ripple mr3-sm d-sm-h d-lg-ib" href="https://www.nike.com/favorites" data-pre="ILink">
      <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
        <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z">
        </path>
      </svg>
    </a>
    {/* Shopping cart icon */}
    <div id="nav-cart" className="pre-acct-cart mr2-sm mr0-lg d-sm-ib" data-pre="Cart">
      <a data-var="anchor" title="Cart Items: 0" aria-label="Cart Items: 0" rel="nofollow" data-type="click_navShortcut" data-path="cart" className="icon-btn ripple d-sm-b" href="https://www.nike.com/cart" data-pre="ILink">
        <div className="">
          <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z">
            </path>
            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z">
            </path>
          </svg>
          <span className="pre-jewel pre-cart-jewel text-color-primary-dark" style={{ visibility: 'hidden' }} data-var="jewel">0</span>
        </div>
      </a>
    </div>
  </div>
);

export default LikeCart;
