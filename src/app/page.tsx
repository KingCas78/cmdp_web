export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">CMDP Web</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/signin"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to CMDP Web
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A modern web application built with Next.js, Supabase, and Vercel
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signin"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50"
            >
              Create Account
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Next.js
            </h3>
            <p className="text-gray-600">
              Modern React framework with server-side rendering and static generation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Supabase
            </h3>
            <p className="text-gray-600">
              Open-source Firebase alternative with PostgreSQL database and authentication.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Vercel
            </h3>
            <p className="text-gray-600">
              Platform for deploying and scaling Next.js applications with ease.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
