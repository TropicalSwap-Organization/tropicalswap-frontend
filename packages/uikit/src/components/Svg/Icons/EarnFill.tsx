import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    /*    <Svg viewBox="0 0 22 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.207 17.836a1 1 0 011-1v-2a1 1 0 01-1-1v-2a1 1 0 011-1h2.404l-1.904-3.728a6 6 0 00-3.234-2.889l1.05-2.801a.75.75 0 00-.825-1.004l-5.24.874a.75.75 0 00-.547 1.075l.945 1.889a6 6 0 00-3.15 2.856l-2.042 4c-2.038 3.992.861 8.728 5.344 8.728h4.398c.635 0 1.239-.095 1.801-.27v-1.73zM8.171 7.086a.75.75 0 01.75.75v.302a2.25 2.25 0 011.476 1.082l.14.244a.75.75 0 11-1.303.745l-.14-.245a.75.75 0 00-.65-.378h-.487a.75.75 0 100 1.5h.687a2.25 2.25 0 01.277 4.484v.266a.75.75 0 01-1.5 0v-.3a2.25 2.25 0 01-1.476-1.083l-.14-.244a.75.75 0 011.303-.745l.14.245a.75.75 0 00.65.377h.746a.75.75 0 100-1.5h-.687a2.25 2.25 0 01-.536-4.435v-.315a.75.75 0 01.75-.75z"
      />
      <path d="M14.707 14.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 11.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 17.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6z" />
    </Svg>*/
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2988_2504)">
        <path
          d="M15 18.75C21.9036 18.75 27.5 16.2316 27.5 13.125C27.5 10.0184 21.9036 7.5 15 7.5C8.09644 7.5 2.5 10.0184 2.5 13.125C2.5 16.2316 8.09644 18.75 15 18.75Z"
          stroke="#C54177"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 13.125V19.375C2.5 22.4844 8.09375 25 15 25C21.9063 25 27.5 22.4844 27.5 19.375V13.125"
          stroke="#C54177"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 18.2812V24.5312" stroke="#C54177" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M27.5 15.1094C33.2031 15.6406 37.5 17.9063 37.5 20.625C37.5 23.7344 31.9063 26.25 25 26.25C21.9375 26.25 19.125 25.75 16.9531 24.9375"
          stroke="#C54177"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 24.8906V26.875C12.5 29.9844 18.0937 32.5 25 32.5C31.9063 32.5 37.5 29.9844 37.5 26.875V20.625"
          stroke="#C54177"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M30 25.7812V32.0312" stroke="#C54177" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 18.2812V32.0312" stroke="#C54177" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2988_2504">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
