import React from 'react'

const Cart = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-3">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-secondary">
        🛠️ Hi, I'm Arfaj Sheru! 🚀
        </h1>

        {/* Message */}
        <p className="mt-4 text-gray-700 text-sm md:text-lg leading-relaxed">
          This section of the website is currently under development. I'm 
          working hard to bring you something amazing. Stay tuned for updates!
        </p>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-200"></div>

        {/* Animated Progress Bar */}
        <div className="mt-6">
          <p className="text-gray-500 text-sm mb-2">Progress: 75%</p>
          <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-secondary rounded-full animate-progress"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-gray-500 text-sm">Loading...</p>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">© 2025 Arfaj Sheru. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Cart