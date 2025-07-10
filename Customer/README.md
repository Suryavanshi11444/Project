Project/
│
├── Backend/                    # Node.js + Express + MongoDB (Admin + Customer APIs)
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   └── paymentController.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Customer.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── paymentRoutes.js
│   ├── uploads/                # Stores uploaded files (screenshots, etc.)
│   ├── .env                    # Environment configuration
│   ├── server.js               # Main Express server file
│   ├── package.json
│   └── package-lock.json
│
└── Customer/                  # React.js Frontend for both roles
    └── src/
        ├── assets/             # Images, icons, etc.
        ├── components/         # Reusable UI components
        │   ├── Footer.jsx
        │   ├── Navbar.jsx
        │   ├── ProductCard.jsx
        │   ├── ProductGrid.jsx
        │   └── Sidebar.jsx
        ├── context/            # Auth & Cart context
        │   ├── AuthContext.jsx
        │   └── CartContext.jsx
        ├── layouts/            # Page layouts
        │   ├── AdminLayout.jsx
        │   └── CustomerLayout.jsx
        ├── pages/
        │   ├── admin/
        │   │   ├── AdminDashboard.jsx
        │   │   ├── AdminLogin.jsx
        │   │   ├── AdminSignup.jsx
        │   │   └── Orders.jsx
        │   └── customer/
        │       ├── Cart.jsx
        │       ├── CustomerLogin.jsx
        │       ├── CustomerSignup.jsx
        │       ├── Home.jsx
        │       ├── ProductDetails.jsx
        │       └── ProductList.jsx
        ├── routes/
        │   ├── adminAuthLoader.jsx
        │   ├── AdminRoutes.jsx
        │   ├── CompleteRoutes.jsx
        │   ├── CustomerRoutes.jsx
        │   └── ProtectedRoute.jsx
        ├── App.jsx
        ├── App.css
        └── index.js
