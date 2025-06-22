# 🛒 Cloth Selling Ecommerce Website

A fully functional demo ecommerce website built using **React.js**, **React Router**, **Context API**, **Tailwind CSS**, and **DummyJSON API**.

---

## 🚀 Features

### 👨 Customer Panel

- View all products
- View individual product details
- Add products to cart
- View and manage cart
- Customer login system (dummy credentials)

### 👩‍💼 Admin Panel

- Admin login system (dummy credentials)
- Admin dashboard with statistics
- Manage orders (demo UI)
- Protected routes for admin access
- Sidebar navigation for admin panel

---

## 🧑‍💻 Technologies Used

- React.js (Vite)
- React Router DOM
- Context API (for authentication and cart state management)
- Tailwind CSS (for beautiful responsive design)
- DummyJSON API (for product data)
- Simple Dummy Authentication (no real backend)

---

## 🌐 API Reference

Using [DummyJSON API](https://dummyjson.com/)

- Get all products: `https://dummyjson.com/products`
- Get product by ID: `https://dummyjson.com/products/:id`
- Search products: `https://dummyjson.com/products/search?q=...`
- Cart operations: `https://dummyjson.com/carts/1` (demo only)

---

## 🔐 Dummy Login Credentials

### Admin Login

- Username: `admin`
- Password: `admin123`

### Customer Login

- Username: `customer`
- Password: `cust123`

---

## 🎨 Color Palette

| Purpose       | Color Name | Color Code | Use For                            |
| ------------- | ---------- | ---------- | ---------------------------------- |
| **Primary**   | Indigo     | `#4F46E5`  | Navbar, buttons, headers           |
| **Secondary** | Sky Blue   | `#0EA5E9`  | Hover effects, secondary buttons   |
| **Tertiary**  | Light Gray | `#F3F4F6`  | Card backgrounds, section dividers |
| **Text**      | Dark Gray  | `#111827`  | Main text color                    |

---

## 📂 Project Structure

src/
│
├── components/ # Reusable components (Navbar, Sidebar, ProductCard, etc.)
├── context/ # Context API files (AuthContext, CartContext)
├── layouts/ # Layouts for customer & admin panels
├── pages/ # All pages (Customer pages & Admin pages)
├── routes/ # Route configuration files
├── App.jsx
├── main.jsx
├── index.css
└── ...

