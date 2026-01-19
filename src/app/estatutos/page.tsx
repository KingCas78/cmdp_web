'use client'

export default function Estatutos() {
  return (
    <div className="min-h-screen page-bg">
      {/* Header */}
      <div className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Estatutos Sociales</h1>
          <p className="text-gray-300 mt-2">Marco normativo y regulatorio de nuestra organización</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Documentos */}
        <div className="space-y-6">
          {/* Estatutos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📄</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Estatutos Generales</h2>
                <p className="text-gray-600 mt-2">
                  Documento que establece la estructura, funciones y derechos de la organización.
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Descargar PDF
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Ver Versión Online
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reglamento Interno */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📋</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Reglamento Interno</h2>
                <p className="text-gray-600 mt-2">
                  Normas internas para la organización de asambleas, elecciones y procedimientos administrativos.
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Descargar PDF
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Ver Versión Online
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Código de Ética */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✨</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Código de Ética</h2>
                <p className="text-gray-600 mt-2">
                  Principios y valores que guían el comportamiento de todos nuestros miembros.
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Descargar PDF
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Ver Versión Online
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Política de Privacidad */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔒</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Política de Privacidad</h2>
                <p className="text-gray-600 mt-2">
                  Información sobre cómo protegemos los datos de nuestros miembros y usuarios.
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Descargar PDF
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Ver Versión Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">¿Preguntas sobre nuestros estatutos?</h3>
          <p className="text-gray-600 mb-4">
            Si tienes dudas sobre nuestros documentos regulatorios, te invitamos a contactarnos.
          </p>
          <a href="/contacto" className="text-blue-600 hover:text-blue-800 font-semibold">
            Contáctanos →
          </a>
        </div>
      </div>
    </div>
  )
}
