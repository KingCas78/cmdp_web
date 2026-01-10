'use client'

import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Contacto</h1>
          <p className="text-orange-100 mt-2">Te responderemos en la brevedad</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div className="lg:col-span-1 space-y-6">
            {/* Teléfono */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+58 212 1234567</p>
              <p className="text-gray-600">+58 414 5678901</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Correo Electrónico</h3>
              <p className="text-gray-600">info@cmdp.org</p>
              <p className="text-gray-600">contacto@cmdp.org</p>
            </div>

            {/* Dirección */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dirección</h3>
              <p className="text-gray-600">
                Calle Principal 123
                <br />
                Caracas, Distrito Capital
                <br />
                Venezuela
              </p>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Horario</h3>
              <p className="text-gray-600">
                Lunes - Viernes
                <br />
                8:00 AM - 5:00 PM
                <br />
                <br />
                Sábado - Domingo
                <br />
                Cerrado
              </p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
              
              {enviado && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Asunto</label>
                  <select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta General</option>
                    <option value="membresia">Membresía</option>
                    <option value="evento">Eventos</option>
                    <option value="soporte">Soporte Técnico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa (simulado) */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden h-96">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600">Mapa interactivo</p>
              <p className="text-gray-500 text-sm">Ubicación de nuestras oficinas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
