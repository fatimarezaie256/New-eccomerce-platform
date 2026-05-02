import React from "react";
import { APP_NAME } from "../../constants";

function Footer() {
  return (
    <div className="w-full border-b">
      <div className="wrappr flex-center">
        <p>
          {new Date().getFullYear()} &copy; {APP_NAME} . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
