const CustomSVG = ({ size, color }: any) => {
  const svgStyle = {
    width: size,
    height: 'auto',
    fill: color,
  }

  return (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      style={svgStyle}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css">{`.st0{fill:none;stroke:${color};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}</style>
        <path d="M29.8,27.4l-3.6-4.8C24.1,19.9,23,16.4,23,13c0-5.5-4.5-10-10-10S3,7.5,3,13v6.1c0,5.4,4.4,9.9,9.9,9.9H29 c0.4,0,0.7-0.2,0.9-0.6C30.1,28.1,30,27.7,29.8,27.4z M12,9c0-0.6,0.4-1,1-1s1,0.4,1,1v2c0,0.6-0.4,1-1,1s-1-0.4-1-1V9z M8,9 c0-0.6,0.4-1,1-1s1,0.4,1,1v2c0,0.6-0.4,1-1,1s-1-0.4-1-1V9z M15,20c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-3c0-2.2,1.8-4,4-4 s4,1.8,4,4V20z"></path>
      </g>
    </svg>
  )
}

export default CustomSVG
