import React from "react";

export function BrowserFrame({ url = "dideccanindia.com", children, className = "" }) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-chrome" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
      </div>
      <div className="browser-screen">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}
