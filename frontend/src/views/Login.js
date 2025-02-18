import React from 'react'
import { Mail, Lock, ArrowRight } from 'lucide-react';

function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-6xl">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt="Office workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40" />
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Please sign in to your account
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign in
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-600 bg-gray-50">
        <p>
          © {new Date().getFullYear()}{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500">
            Your Company
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Login