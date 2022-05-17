import React, { useEffect, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import whats from '../../assets/logo/whatsapp.png'

export default function Page(props) {
  return (
    <ScrollableAnchor id={'aplicativo'}>
      <div className="fixed right-6 md:right-2 bottom-10 md:bottom-8 whats-message">
        <a
          target="_blank"
          href="https://wa.me/message/TSSQOVGI3GRHK1"
        >
          <img
            className="flex items-start md:items-end mr-2 md:mr-28 w-14 md:w-20"
            src={whats}
            alt="Whatsapp"
          />
        </a>
      </div>
    </ScrollableAnchor>

  )
}
