import { useState } from 'react'

export const DONATE_URL =
  'https://donate.stripe.com/00w5kD3Gj1Xo9v7gVOcs800'

const STORAGE_KEY = 'lotto-generator-donate-dismissed'

/**
 * Read whether the visitor already dismissed the donate card this session.
 * @returns {boolean}
 */
function wasDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

/**
 * Floating donation card with a Stripe QR code and matching link.
 * @returns {JSX.Element | null}
 */
function DonateFloat() {
  const [isVisible, setIsVisible] = useState(() => !wasDismissed())

  /**
   * Hide the card for the rest of this browser session.
   * @returns {void}
   */
  function dismiss() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // Private mode can block storage; still hide for this visit.
    }
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <div
        className="donate-float-spacer no-print md:hidden"
        aria-hidden="true"
      />
      <aside className="donate-float no-print" aria-label="Support this project">
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="donate-card"
        >
          <img
            src="/donate-qr.svg"
            alt=""
            width="88"
            height="88"
            className="donate-qr"
          />
          <p className="donate-copy">
            If this app, code, or repository has helped you or someone you
            know, please consider donating. I appreciate any help to offset
            the costs of development and/or AI Credits.
            <span className="visually-hidden">
              {' '}
              Opens the Stripe donation page in a new tab.
            </span>
          </p>
        </a>
        <button
          type="button"
          className="donate-dismiss"
          onClick={dismiss}
          aria-label="Dismiss donation request"
        >
          <span aria-hidden="true">×</span>
        </button>
      </aside>
    </>
  )
}

export default DonateFloat
