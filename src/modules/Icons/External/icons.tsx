//path: src\modules\Icons\External\icons.tsx

import React, { FC } from "react";

export interface IconProps {
    className?: string;
}

export const Refresh: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <>
        <svg
            className={className}
            aria-hidden="true"
            fill="none"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
        </svg>
    </>
);

export const Burger: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <>
        <svg
            className={className}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    </>
);

export const Entry: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <>
        <svg
            className={className}
            viewBox="0 0 500 500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path d="M 223.662 154.639 C 200.464 93.674 70.113 213.704 55.251 145.299 C 35.356 53.731 481.167 66.706 439.715 148.503 C 409.484 208.157 287.232 88.82 268.974 155.985 C 252.299 217.326 270.737 294.792 277.087 335.937 C 283.835 379.661 308.945 377.615 308.37 426.645 C 307.684 485.19 207.268 486.43 204.039 425.357 C 201.718 381.447 221.997 386.705 230.672 337.829 C 237.122 301.491 248.815 220.742 223.662 154.639 Z"></path>
        </svg>
    </>
);

export const Splitter: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <>
        <svg
            className={className}
            viewBox="90 100 280 270"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M 223.701 195.275 C 225.022 154.925 199.6 162.745 199.358 127.761 C 199.081 87.773 259.377 83.593 264.559 124.037 C 269.256 160.697 236.363 153.213 240.332 196.107 C 242.981 224.735 243.748 227.064 284.779 255.605 C 321.014 280.81 326.108 256.076 353.943 268.17 C 383.606 281.058 359.706 333.748 327.758 323.399 C 287.583 310.385 321.027 289.947 279.397 264.557 C 235.185 237.592 227.129 238.554 181.496 264.917 C 150.914 282.585 161.955 310.997 139.214 321.666 C 99.401 340.344 76.483 286.264 104.964 270.045 C 126.853 257.58 132.278 279.592 169.178 257.363 C 221.319 225.953 222.668 226.849 223.701 195.275 Z" />
        </svg>
    </>
);

export const Atom: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 21">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
    </svg>
);

export const Users: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
    </svg>
);

export const BookOpen: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
    </svg>
);

export const Squares2x2: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
    </svg>
);

export const Image: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 500 500"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 11.545 343.641 L 137.187 217.999 C 158.594 196.591 193.298 196.591 214.681 217.999 L 340.323 343.641 M 303.792 307.11 L 338.107 272.796 C 359.515 251.389 394.219 251.389 415.601 272.796 L 486.446 343.641 M 48.076 434.969 L 449.915 434.969 C 470.105 434.969 486.446 418.603 486.446 398.438 L 486.446 106.191 C 486.446 86.026 470.105 69.66 449.915 69.66 L 48.076 69.66 C 27.911 69.66 11.545 86.026 11.545 106.191 L 11.545 398.438 C 11.545 418.603 27.911 434.969 48.076 434.969 Z M 303.792 160.986 L 303.988 160.986 L 303.988 161.182 L 303.792 161.182 L 303.792 160.986 Z M 312.925 160.986 C 312.925 168.024 305.327 172.409 299.238 168.902 C 296.413 167.27 294.66 164.251 294.66 160.986 C 294.66 153.948 302.283 149.565 308.371 153.072 C 311.195 154.703 312.925 157.723 312.925 160.986 Z"></path>
    </svg>
);

export const ChatBubbleLeft: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 500 500"
        strokeWidth={1.5}
        stroke="currentColor">
        <path d="M 165.401 198.045 C 165.401 205.213 157.662 209.679 151.462 206.108 C 148.585 204.446 146.797 201.369 146.797 198.045 C 146.797 190.876 154.562 186.413 160.762 189.984 C 163.64 191.646 165.401 194.723 165.401 198.045 Z M 165.401 198.045 L 156.099 198.045 M 258.421 198.045 C 258.421 205.213 250.683 209.679 244.483 206.108 C 241.605 204.446 239.816 201.369 239.816 198.045 C 239.816 190.876 247.582 186.413 253.785 189.984 C 256.66 191.646 258.421 194.723 258.421 198.045 Z M 258.421 198.045 L 249.119 198.045 M 351.442 198.045 C 351.442 205.213 343.703 209.679 337.502 206.108 C 334.625 204.446 332.84 201.369 332.84 198.045 C 332.84 190.876 340.602 186.413 346.805 189.984 C 349.682 191.646 351.442 194.723 351.442 198.045 Z M 351.442 198.045 L 342.139 198.045 M 7.268 272.711 C 7.268 312.4 35.123 346.977 74.414 352.758 C 101.378 356.726 128.615 359.777 156.099 361.91 L 156.099 477.107 L 259.887 373.346 C 265.045 368.238 271.942 365.284 279.183 365.11 C 327.604 363.92 375.9 359.803 423.8 352.758 C 463.116 346.977 490.973 312.424 490.973 272.685 L 490.973 123.407 C 490.973 83.668 463.116 49.113 423.825 43.334 C 365.978 34.851 307.587 30.583 249.119 30.609 C 189.785 30.609 131.442 34.949 74.414 43.334 C 35.123 49.113 7.268 83.692 7.268 123.407 L 7.268 272.685 L 7.268 272.711 Z"></path>
    </svg>
);

export const Code: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
        />
    </svg>
);

export const RightArrow: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
        />
    </svg>
);

export const User: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500">
        <path d="M 249.164 11.145 C 65.685 11.145 -48.984 209.759 42.755 368.666 C 134.495 527.572 363.857 527.572 455.597 368.666 C 476.5 332.439 487.511 291.321 487.511 249.491 C 487.369 117.924 380.754 11.288 249.164 11.145 Z M 253.684 137.422 C 308.742 137.422 338.616 189.906 311.11 237.574 C 298.335 259.694 274.714 264.932 249.164 264.932 C 194.129 264.932 162.531 210.354 192.406 164.134 C 207.12 141.369 228.158 137.422 253.684 137.422 Z M 249.164 440.17 C 121.692 440.401 95.139 275.219 149.784 293.878 C 190.473 307.771 271.009 316.54 351.772 293.232 C 409.213 276.655 376.107 439.94 249.164 440.17 Z"></path>
    </svg>
);

export const Send: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20">
        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
    </svg>
);

export const CheckCircle: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
            clipRule="evenodd"
        />
    </svg>
);

export const Upload: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 18">
        <path
            fill="currentColor"
            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
        />
    </svg>
);

export const Emoji: FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20">
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
        />
    </svg>
);

export const Close: FC<IconProps> = ({ className = "w-70p h-70p" }) => (
    <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
            stroke="currentColor"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36-1.41 1.42z"
        />
    </svg>
);
