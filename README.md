# e-Bebek Product Carousel | Pure JavaScript & jQuery Implementation

This project aims to **rebuild and clone** the product carousel component titled **"Beğenebileceğinizi düşündüklerimiz"** ("What We Think You Might Like") located on the homepage of **e-bebek.com**.  
The entire project is written in a **single JavaScript file** using only **HTML, CSS, JavaScript (and jQuery)**.

---

## 🎯 Objectives and Requirements

> The carousel component on e-bebek’s homepage must be cloned **exactly**:
- Must work with **pure JavaScript + jQuery**
- Products should be fetched remotely (via JSON)
- Favorite heart icons must be interactive (hover & click)
- Different behaviors for **desktop and mobile**
- Should support **responsive design**
- Carousel navigation buttons must visually match the original
- Favorite products must be stored using **`localStorage`**

---

## ✅ Features Implemented

### 🔧 Configuration and Setup

- The script is set to run **only on the homepage** using `window.location.pathname === "/"`.
- Automatically loads **jQuery** if it's not already present.

### 🎨 Design and CSS

- All components are isolated under the `#ebebek-carousel` ID.
- **Scoped CSS classes** are used to prevent conflicts with global styles.
- Fonts, colors, and button styles are carefully matched with the original e-bebek design.
- **Navigation buttons are hidden on mobile**, and swipe gestures are supported.

### 🧠 Favorite System (Heart Icon)

- On **desktop**, animated heart icons appear on hover.
- On **mobile**, favorites can only be toggled via tap/click.
- All favorite selections are stored in **`localStorage`**.
- Favorites are automatically restored when products reload.

### 📦 Product Data

- Products are fetched from an external JSON URL via `$.get()`.
- Each product is rendered with:
  - Product image
  - Brand and product name
  - Discounted and original prices (if available)
  - Percentage discount
  - **"Add to Cart"** button
  - Favorite heart icon

### 🎯 Carousel Navigation Buttons

- Left and right buttons are implemented as `prev-btn` and `next-btn`.
- Just like the original e-bebek version:
  - **Each click scrolls one product card at a time**
  - Button icons are added using **exact SVGs**
  - Buttons are automatically **hidden on mobile**

### 📱 Responsive Behavior

- **Swipe gestures** are supported on mobile devices.
- Buttons are hidden using `display: none` for mobile view.
- The scroll behavior works smoothly across all screen sizes.

---

## 📁 Project File Structure

> Everything runs inside a **single JavaScript file**:
```bash
product-carousel.js   # Contains all HTML, CSS, and JS
