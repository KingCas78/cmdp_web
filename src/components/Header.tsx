'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Buscador - Izquierda */}
          <div className="flex">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Logo - Centro */}
          <div className="flex justify-center">
            <Link href="/" className="flex flex-col items-center gap-1">
              <img 
                src="/images/Logo_CMDP.png" 
                alt="Logo CMDP"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Login - Derecha */}
          <div className="flex justify-end gap-2">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/signup"
              className="btn btn-primary"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
