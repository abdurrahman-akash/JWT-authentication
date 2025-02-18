import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
return (
    <div>
        <footer className="py-4 text-center text-sm text-gray-600 bg-gray-50">
            <p>
                © {new Date().getFullYear()}{' '}
                <Link to="https://github.com/abdurrahman-akash/JWT-authentication" className="text-blue-600 hover:text-blue-500">
                    JWT Authentication
                </Link>
                {' '}&& Developed by <Link to="https://github.com/abdurrahman-akash" className="text-blue-600 hover:text-blue-500">
                    Abdur Rahman Akash
                </Link>
                . All rights reserved.
            </p>
        </footer>
    </div>
)
}

export default Footer
