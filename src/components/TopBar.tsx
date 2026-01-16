'use client'

export default function TopBar() {
  return (
    <div className="topbar-bg text-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-icon"
            title="Facebook"
          >
            f
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-icon"
            title="Instagram"
          >
            📷
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-icon"
            title="YouTube"
          >
            ▶
          </a>
        </div>

        {/* Center Text */}
        <div className="text-center flex-1">
          <p className="text-sm font-semibold tracking-wide">
            #unidos por la dermatología pediátrica
          </p>
        </div>

        {/* Empty space for balance */}
        <div className="w-20"></div>
      </div>
    </div>
  )
}
