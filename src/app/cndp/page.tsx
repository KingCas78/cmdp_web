'use client'

export default function CNDP() {
  return (
    <div className="min-h-screen page-bg">
      {/* Header */}
      <div className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">CNDP</h1>
          <p className="text-cyan-100 mt-2">Congreso Nacional de Dermatología Pediátrica 2026</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sección Introducción */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bienvenida</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            El Colegio Mexicano de Dermatología Pediátrica A.C. (CMDP) es una asociación civil sin fines de lucro que agrupa a los dermatólogos pediatras más destacados de México. 
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
           Desde su fundación en 1995, el CMDP se ha dedicado a promover la excelencia en la atención dermatológica infantil, fomentar la investigación científica y ofrecer educación continua a sus miembros y a la comunidad médica en general.
          </p>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Misión */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600">
              Promover la educación médica continua en la dermatología pediátrica, 
              fomentar la investigación científica y representar a los dermatólogos 
              pediatras en México.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600">
              Ser una asociación líder en dermatología pediátrica a nivel nacional e internacional, 
              reconocida por su excelencia en educación, investigación y atención clínica.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
            <p className="text-gray-600">
             Integridad, excelencia, colaboración, innovación y compromiso con la salud 
             dermatológica infantil.
            </p>
          </div>
        </div>

        {/* Secciones principales */}
        <div className="space-y-8">
          {/* Estructura Organizativa */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Estructura Organizativa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Órganos Directivos:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>✓ Asamblea General</li>
                  <li>✓ Junta Directiva</li>
                  <li>✓ Presidencia</li>
                  <li>✓ Secretaría Ejecutiva</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Comisiones Especializadas:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>✓ Comisión de Economía</li>
                  <li>✓ Comisión de Empleo</li>
                  <li>✓ Comisión de Tecnología</li>
                  <li>✓ Comisión de Desarrollo Sostenible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Áreas de Trabajo */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">📊 Política Económica</h3>
                <p className="text-gray-600">Análisis y propuestas sobre política fiscal, monetaria y comercial.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">🏢 Relaciones Laborales</h3>
                <p className="text-gray-600">Promoción de relaciones armoniosas entre empresa y trabajadores.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">💻 Transformación Digital</h3>
                <p className="text-gray-600">Impulso a la adopción de nuevas tecnologías en el sector privado.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">🌱 Sostenibilidad</h3>
                <p className="text-gray-600">Integración de prácticas sostenibles en los negocios.</p>
              </div>
            </div>
          </div>

          {/* Afiliación */}
          <div className="bg-cyan-50 rounded-lg p-8 border-l-4 border-cyan-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Afiliación y Membresía</h2>
            <p className="text-gray-600 mb-4">
              Somos una organización abierta a empresarios, industriales, comerciantes y productores 
              que compartan nuestros valores y objetivo de contribuir al desarrollo económico nacional.
            </p>
            <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
              Solicitar Afiliación
            </button>
          </div>

          {/* Contacto Congreso Nacional */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacto Congreso Nacional</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📱 Teléfono</h3>
                <p className="text-gray-600">+58 212 7654321</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">✉️ Email</h3>
                <p className="text-gray-600">info@cndp.org</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📍 Dirección</h3>
                <p className="text-gray-600">Sede Central, Caracas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
