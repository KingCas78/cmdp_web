'use client'

export default function TopBar() {
  return (
    <div className="bg-blue-400 text-white py-3" style={{backgroundColor: '#9FB7C9'}}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl transition-colors"
            style={{color: 'inherit'}}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            title="Facebook"
          >
            f
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl transition-colors"
            style={{color: 'inherit'}}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            title="Instagram"
          >
            📷
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl transition-colors"
            style={{color: 'inherit'}}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E6D6A8'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
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
