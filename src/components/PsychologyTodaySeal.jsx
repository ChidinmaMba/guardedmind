import { useEffect } from 'react'
import './PsychologyTodaySeal.css'

const PROFILE_URL = 'https://www.psychologytoday.com/profile/1700875'
const SCRIPT_SRC = 'https://member.psychologytoday.com/verified-seal.js'
const SCRIPT_ID = 'psychology-today-verified-seal'
const DATA_CODE =
  'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzE3MDA4NzU/Y2FsbGJhY2s9c3hjYWxsYmFjaw=='

export default function PsychologyTodaySeal() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.type = 'text/javascript'
    script.src = SCRIPT_SRC
    script.dataset.badge = '13'
    script.dataset.id = '1700875'
    script.dataset.code = DATA_CODE
    script.async = true

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="pt-seal">
      <p className="pt-seal__label">Professional verification provided by Psychology Today</p>
      <a
        href={PROFILE_URL}
        className="sx-verified-seal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View verified Psychology Today profile"
      />
    </div>
  )
}
