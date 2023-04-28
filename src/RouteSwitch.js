import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import HomePage from "./components/HomePage";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;

{
  /* <p>
More ways to shop:{" "}
<a href="https://www.apple.com/retail/">Find and Apple Store</a> or{" "}
<a href="https://locate.apple.com/">other retailer</a> near you. Or call
1-800-MY-APPLE.
</p>
<hr />
<div className="copyright">
<p>Copyright © 2023 Apple Inc. All rights reserved.</p>
<ul>
  <li>
    <a href="https://www.apple.com/legal/privacy/">Privacy Policy</a>
  </li>
  <li>|</li>
  <li>
    <a href="https://www.apple.com/legal/internet-services/terms/site.html">
      Terms of Use
    </a>
  </li>
  <li>|</li>
  <li>
    <a href="https://www.apple.com/us/shop/goto/help/sales_refunds">
      Sales and Refunds
    </a>
  </li>
  <li>|</li>
  <li>
    <a href="https://www.apple.com/legal/">Legal</a>
  </li>
  <li>|</li>
  <li>
    <a href="https://www.apple.com/sitemap/">Site Map</a>
  </li>
</ul>
<p>
  <a href="https://www.apple.com/choose-country-region/">
    United States
  </a>
</p> */
}
