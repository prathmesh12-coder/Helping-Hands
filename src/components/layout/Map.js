

import React from 'react'

function Map() {
  return (
    <div style={{width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative'}}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.236918534212!2d81.02150811504254!3d26.800583883176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37b925b07fb%3A0xe514a28ec36dcac1!2sIIIT%20Lucknow%20Admin%20Block!5e0!3m2!1sen!2sin!4v1680812779502!5m2!1sen!2sin"
        title="Google Map"
        style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0', marginBottom: '0'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Map
