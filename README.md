# Omni Store Product Website

A responsive product showcase web application built using React and Vite. The application displays products fetched from the DummyJSON API with search, category filtering, pagination, and product details.

---

## Tech Stack

- React
- Vite
- React Router DOM
- Redux Toolkit
- Axios
- Bootstrap 5

---

## Features

- Home Page
- Product Listing
- Product Details
- Search Products
- Category Filter
- Pagination
- Responsive Design
- Loading Spinner
- Error Handling
- Lazy Loaded Images
- Route Lazy Loading

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd surgeonslab-website
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Folder Structure

```
src
│
├── assets
│
├── components
│   ├── CategoryFilter.jsx
│   ├── ErrorMessage.jsx
│   ├── FeaturedProducts.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   ├── ScrollToTop.jsx
│   └── SectionTitle.jsx
│
├── hooks
│   └── useDebounce.js
│
├── layouts
│   └── MainLayout.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── NotFound.jsx
│
├── redux
│   ├── productSlice.js
│   └── store.js
│
├── routes
│   └── AppRoutes.jsx
│
├── utils
│
├── App.jsx
└── main.jsx
```

---

## API

```
https://dummyjson.com/products
```

---

## Future Enhancements

- Backend integration with a real database.
- User authentication and authorization.
- Server-side search, filtering, and pagination for large datasets.
- Product sorting (Price, Name, Category).
- Wishlist and shopping cart functionality.
- Product reviews and ratings.
- Image gallery.