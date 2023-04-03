import React from 'react'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className="copyright-copyright">
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">
          <span className="copyright-text1">
            © All rights reserved
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.teleporthq.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text2">@TeleportHQ.</span>
          </a>
          <span className="copyright-text3">
            {' '}
            Powered by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text4">Vercel</span>
          </a>
          <span className="copyright-text5">
            . Image source:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://www.unsplash.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text6">Unsplash</span>
          </a>
          <span className="copyright-text7">.</span>
        </span>
      </div>
    </div>
  )
}

export default Copyright
