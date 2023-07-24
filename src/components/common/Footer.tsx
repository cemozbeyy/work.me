import React from "react";
import "./Footer.scss";

const Footer: React.FC<{}> = () => {
  // Doğru kullanım: Bir ReactNode döndürüyor
  return (
    <div className="footer">
      <ul>
        <li>
          <a target="_blank" href="https://twitter.com/__cmew__">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" href="https://codepen.io/oozbey">
            Codepen
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:cemozbey8@gmail.com">
            Email
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cem-%C3%B6zbey-321827207"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/cemozbeyy">
            Github
          </a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
