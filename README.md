# 🌿 Paradise Nursery Shopping Application

This is the IBM Full Stack Developer Chapter 4 Front-End Apps Final Project.

**Paradise Nursery** is a responsive React-based online plant shopping application. Users can browse plants by category, add products to a shopping cart, change product quantities, remove products, and view the total cost of their order.

The application uses **React** and **Redux Toolkit** to manage the shopping cart state globally.

## ✨ Features

### 🏠 Landing Page

- Welcome page for Paradise Nursery.
- Company introduction.
- "Get Started" button to open the product listing.
- Navigation to the shopping experience.

### 🌱 Product Listing Page

- Plants are grouped into categories:
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Each plant card displays:
  - Plant image
  - Plant name
  - Description
  - Price
  - "Add to Cart" button
- The Add to Cart button becomes disabled after the product has been added.
- The cart icon displays the current total number of products.

### 🛒 Shopping Cart

Users can:

- View all selected plants.
- Increase the quantity of a plant.
- Decrease the quantity of a plant.
- Remove a plant completely.
- See the subtotal for each product.
- See the total number of products.
- See the total price of the entire cart.
- Continue shopping and return to the product listing.
- Proceed to Checkout.

### 💳 Checkout

The Checkout button displays the total order amount and provides a checkout/payment interface for the selected order.

### 📱 Responsive Design

The application is designed to work on:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

CSS media queries are used to adapt the layout to smaller screens.

---

## 🛠 Technologies Used

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### State Management

- Redux
- Redux Toolkit
- React Redux

### Build Tools

- Vite
- npm

### Deployment

- GitHub
- GitHub Pages
- gh-pages

---

## 📂 Project Structure

```text
e-plantShopping/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── CartItem.jsx
│   ├── CartItem.css
│   ├── CartSlice.jsx
│   ├── store.js
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
