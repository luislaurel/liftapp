import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/JJLC-Corporation/jjlc-corporation"
        className="footer-developers"
        style={{ textDecoration: "none" }}
      >
        © {new Date().getFullYear()} JJLC Corporation
      </a>
    </div>
  );
}

export default Footer