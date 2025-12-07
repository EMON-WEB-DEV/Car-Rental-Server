⚙️ Features & Technology Stack
🚗 Core Features

Role-based authentication (Admin & Customer)

Secure user registration and login using JWT

Vehicle inventory management with availability tracking

Booking system with date validation and price calculation

Automatic vehicle status updates (booked / available)

Admin-only controls for vehicles, users, and bookings

Customers can manage only their own bookings and profiles

Data consistency ensured with database transactions

🔐 Security

Password hashing using bcrypt

Authentication via JWT (Bearer Token)

Role-based route protection

SQL injection prevention using parameterized queries

🛠️ Technology Stack

Backend: Node.js + TypeScript

Framework: Express.js

Database: PostgreSQL

Authentication: JSON Web Token (JWT)

Password Hashing: bcrypt

Validation: express-validator

Database Client: pg

Environment Config: dotenv

🚀 Setup & Usage Instructions
✅ Prerequisites

Node.js (v18 or higher)

PostgreSQL (v13+)

npm or yarn

📥 Installation
git clone https://github.com/your-username/vehicle-rental-api.git
cd vehicle-rental-api
npm install

🗄️ Database Setup

Create a PostgreSQL database:

CREATE DATABASE vehicle_rental;


Run schema file:

psql -U postgres -d vehicle_rental -f db/schema.sql

🔧 Environment Variables

Create a .env file in the project root:

PORT=4000
DATABASE_URL=postgresql://postgres:password@localhost:5432/vehicle_rental
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=8h
BCRYPT_SALT_ROUNDS=12

▶️ Run the Project

Development mode

npm run dev


Production build

npm run build
npm start


Server will run on:

http://localhost:4000

🧪 API Usage

Authentication Header:

Authorization: Bearer <JWT_TOKEN>


Default API prefix:

/api/v1


Example:

POST /api/v1/auth/signup
GET  /api/v1/vehicles
POST /api/v1/bookings

🧠 Notes That Matter

Admin users must be created manually or by updating role in DB.

Booking creation uses database transactions for safety.

Vehicles with active bookings cannot be deleted.

Customers cannot cancel bookings after start date.

Status auto-return logic can be handled via cron or scheduler.