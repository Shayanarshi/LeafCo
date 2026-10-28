# Leaf & Co.

A small, complete indoor-plants storefront — a fresh project (different product
niche, different code, own name) built with the same stack as the bigger
e-commerce project you already know: React + Vite + Tailwind + React Router
+ Context API. Meant to be simple enough to explain end-to-end, and easy to
extend live if you're asked to make changes.

## Run it

```bash
npm install
npm run dev
```

## Pages / routes

| Route            | Page              | What it does |
|-------------------|-------------------|---------------|
| `/`               | Home              | Hero + 3 featured products |
| `/shop`           | Shop              | Grid of all 6 products |
| `/product/:id`    | ProductDetails    | Reads the id from the URL, shows one product |
| `/cart`           | Cart              | List of cart items, qty +/-, remove, total |
| `/about`          | About             | Static text |
| `/contact`        | Contact           | Simple form, local state only |
| `/login`          | Login             | Demo login — any email/password "works" |
| `/signup`         | Signup            | The registration form, wired to log the user in |

## Structure

```
src/
  main.jsx              # mounts <App />, wraps it in BrowserRouter + the two Providers
  App.jsx                # <Header /> + <Routes> + <Footer />
  index.css               # Tailwind import + color variables (--color-forest etc.)
  data/
    products.js           # the 6 hardcoded products — no backend, no images needed
  Contexts/
    CartContext.jsx        # cartItems state + addToCart/removeFromCart/updateQty
    AuthContext.jsx         # fake logged-in user, persisted to localStorage
  components/
    Header.jsx              # nav, hamburger menu, cart badge, login/logout
    Footer.jsx
    ProductCard.jsx           # used on Home and Shop
    InfoTooltip.jsx            # the "?" hover tooltip, used on Signup
  pages/
    Home.jsx, Shop.jsx, ProductDetails.jsx, Cart.jsx,
    About.jsx, Contact.jsx, Login.jsx, Signup.jsx
```

## How to explain it, section by section

- **Routing (`App.jsx`)**: `react-router-dom`'s `<Routes>`/`<Route>` map URL
  paths to page components. `/product/:id` uses a URL param, read in
  `ProductDetails.jsx` via `useParams()`.
- **Two contexts, two jobs.** `CartContext` owns the cart array and the
  functions that mutate it (`addToCart`, `removeFromCart`, `updateQty`), plus
  two derived values (`cartCount`, `cartTotal`) computed with `.reduce()` —
  worth explaining why these aren't stored in state themselves (they're
  always recalculated from `cartItems`, so they can never go stale).
  `AuthContext` owns just the logged-in user, persisted to `localStorage` so
  a refresh doesn't log you out — same pattern as your other project's
  `MainContext`.
- **`ProductCard`** is reused on both Home and Shop, taking `product` as a
  prop — a natural place to be asked "why is this its own component?"
  (answer: used in two different pages, so duplicating the markup would mean
  editing it twice for every change).
- **No image files.** Each product has an `emoji` and a `color` instead of a
  photo — keeps the project self-contained and fast to open, and is easy to
  swap for real `<img>` tags later if asked.

## Things you could be asked to change live

- Add a "sort by price" dropdown on the Shop page.
- Add a search box that filters `products` by name.
- Show a "your cart is empty" message vs. hiding the Checkout button (already
  partly done — could be extended).
- Add quantity limits (e.g., can't add more than 10 of one plant).
- Gate `/cart` or `/checkout` behind login (redirect to `/login` if `user` is
  null) — a small addition to `App.jsx` using `AuthContext`.
