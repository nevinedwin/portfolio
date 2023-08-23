import React from 'react'

const LiIcon = () => {
  return (
    <figure className='absolute left-0 stroke-dark'>
      <svg width='75' height='75' viewBox='0 0 100 100'>
        <circle
          cx='75'
          cy='50'
          radius='20'
          className='stroke-primary stroke-1 fill nonex'
        />
        <circle cx='75' cy='50' radius='20' />
        <circle cx='75' cy='50' radius='20' />
        <circle cx='75' cy='50' radius='20' />
      </svg>
    </figure>
  )
}

export default LiIcon
