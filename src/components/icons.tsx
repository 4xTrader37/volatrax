import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="m20.5 9.5-8.5 5.5L3.5 9.5" />
      <path d="M12 20V9.5" />
    </svg>
  ),
};
