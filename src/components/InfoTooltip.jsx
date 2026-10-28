import React, { useState } from 'react'

const InfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false)

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        aria-label="More info"
        className="w-4 h-4 rounded-full border border-gray-500 text-gray-500 text-xs flex items-center justify-center leading-none"
      >
        ?
      </button>
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 top-6 z-10 w-48 bg-gray-800 text-white text-xs rounded-md px-3 py-2 shadow-lg">
          {text}
        </span>
      )}
    </span>
  )
}

export default InfoTooltip
