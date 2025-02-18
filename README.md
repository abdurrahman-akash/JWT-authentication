# Django + React Authentication System

## Overview
This project is a full-stack authentication system built using Django for the backend and React for the frontend. It implements JWT authentication using Django REST Framework (DRF) and Simple JWT, allowing users to register, log in, log out, and access protected routes.

## Features
- User authentication using JWT (JSON Web Token)
- Register, login, and logout functionality
- Protected routes using React Router
- Token refresh mechanism for maintaining user sessions
- SweetAlert2 for user notifications

## Tech Stack
### Backend (Django)
- Django
- Django REST Framework
- Simple JWT (for authentication)

### Frontend (React)
- React.js
- React Router
- Tailwind CSS (for styling)
- SweetAlert2 (for alerts and notifications)

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/django-react-auth.git
cd django-react-auth
```

### 2. Backend Setup (Django)
#### a) Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate     # On Windows
```

#### b) Install Dependencies
```bash
pip install -r requirements.txt
```

#### c) Run Migrations & Create Superuser
```bash
python manage.py migrate
python manage.py createsuperuser
```

#### d) Start the Backend Server
```bash
python manage.py runserver
```

---

### 3. Frontend Setup (React)
#### a) Navigate to the `frontend` Directory
```bash
cd frontend
```

#### b) Install Node.js Dependencies
```bash
npm install
```

#### c) Install Tailwind CSS (if not already installed)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### d) Start the React Development Server
```bash
npm start
```

---

## Project Structure
```
├── backend/
│   ├── manage.py
│   ├── authentication/  # Django app for user authentication
│   ├── settings.py
│   ├── urls.py
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── permissions.py
│   └── tests.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/AuthContext.js
│   │   ├── utils/PrivateRoute.js
│   │   ├── views/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── routes.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

## API Endpoints
| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| POST   | `/api/token/`          | Get JWT access token  |
| POST   | `/api/token/refresh/`  | Refresh access token  |
| POST   | `/api/register/`       | Register a new user   |
| POST   | `/api/login/`          | Authenticate user     |
| POST   | `/api/logout/`         | Logout user           |
| GET    | `/api/protected/`      | Access protected data |

---

## Authentication Flow
1. **User Registration**: A new user registers using `/api/register/`.
2. **Login**: The user logs in with email and password, receiving an access and refresh token.
3. **Token Storage**: Tokens are stored in `localStorage` for maintaining the session.
4. **Protected Routes**: React checks authentication before granting access to private routes.
5. **Token Refresh**: When the access token expires, React sends the refresh token to `/api/token/refresh/`.
6. **Logout**: Clears tokens and redirects the user to the login page.

---

## Troubleshooting
- If `npx tailwindcss init` fails, ensure you have installed Tailwind CSS properly.
- If you get authentication errors, check if your tokens are stored and valid.
- If React Router gives an error, ensure `PrivateRoute.js` is correctly structured.

---

## Contributing
Feel free to submit a pull request or report issues in the repository.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any questions, feel free to reach out!

Happy Coding! 🚀

