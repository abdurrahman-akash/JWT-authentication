import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <div className="flex-shrink-0">
              <img
                className="h-10 w-10 object-contain"
                src="https://i.postimg.cc/Wz374nGr/logo.png"
                alt="Logo"
              />
            </div> */}
            <Link to="/" className="flex items-center space-x-3">
              <Menu className="h-8 w-8" />
              <span className="text-xl font-bold">Auth System</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Home
              </Link>
              <>
                  <Link
                    to="/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  {/* <button
                    
                    className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700"
                  >
                    Sign Out
                  </button> */}
                </>
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700"
                  >
                    Register
                  </Link>
                </>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Home
          </Link>
          <>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Dashboard
              </Link>
              {/* <button
                onClick={() => signOut()}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700"
              >
                Sign Out
              </button> */}
            </>
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700"
              >
                Register
              </Link>
            </>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;