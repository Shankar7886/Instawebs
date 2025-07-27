const WhiteLogoIcon = ({ width = 200, height = 200, color = "rgb(128,128,128)" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1280 1024"
    width={width}
    height={height}
  >
    {/* Transparent Background */}
    <rect x="0" y="0" width="1280" height="1024" fill="none" />

    {/* Main Box Outline – moved UP */}
    <g transform="matrix(4.46064841007167 0 0 4.46064841007167 640 350)">
      <polygon
        style={{ fill: color }}
        points="100,100 0,100 0,95.12 95.12,95.12 95.12,-95.12 -95.12,-95.12 -95.12,0 -100,0 -100,-100 100,-100 100,100"
      />
    </g>

    {/* "I" Letter – also moved UP */}
    <g transform="matrix(1.9211538461538462 0 0 1.9211538461538462 640 360)">
      <path
        style={{ fill: color }}
        transform="translate(-47.085, 109.865)"
        d="M 72.2 -219.73 L 21.97 -219.73 L 21.97 -200.9 L 36.1 -200.9 L 36.1 -18.83 L 21.97 -18.83 L 21.97 0 L 72.2 0 L 72.2 -18.83 L 58.07 -18.83 L 58.07 -200.9 L 72.2 -200.9 Z"
      />
    </g>
    {/* Bigger "INSTAWEBS" Text with More Gap */}
    <text
      x="640"
      y="950" // moved further down
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="500"
      fontSize="140" // bigger text
      fill={color}
      letterSpacing="30" // more spacing between letters
    >
      INSTAWEBS
    </text>
  </svg>
);

export default WhiteLogoIcon;
