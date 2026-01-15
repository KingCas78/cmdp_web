export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-pink-300 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-2">
              🎉 Congreso Nacional de Dermatología Pediátrica
            </h3>
            <p className="text-blue-800 text-sm md:text-base">
              Únete a nosotros del 2 al 5 de julio para el congreso más importante en dermatología pediátrica
            </p>
          </div>
          <a
            href="/cndp"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Saber más
          </a>
        </div>
      </div>
    </div>
  )
}
