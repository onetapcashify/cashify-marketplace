# Cashify-style Firebase Marketplace

The existing public UI, banners, images and navigation styling are preserved. This revision focuses on authentication, protected admin access, admin-to-storefront synchronization, coupon limits, UPI settings and search.

## Run

```bash
npm install
npm run dev
```

## Customer authentication

- Email/password login and registration are available at `/login`.
- The header changes from **Login** to the signed-in user's first name/account automatically.
- Google Sign-In is wired to Firebase Authentication. Enable the Google provider in Firebase Console before using it.
- Account logout is available from `/account`.

## Admin authentication

The admin panel is not linked from the public login page or footer.

- Admin login: `/admin/login`
- Protected panel: `/admin`
- Authorized admin email: `onetapcashify@gmail.com`
- Local development fallback password: `Admin@123` (change with `VITE_ADMIN_PASSWORD`)

For production, create `onetapcashify@gmail.com` in Firebase Authentication and use its Firebase password. Do not rely on the local fallback password in production.

## Store settings

Default values:

- Merchant UPI: `subhamdebasish225@okicici`
- Support phone: `9621956411`
- Support/admin email: `onetapcashify@gmail.com`

These are also editable under **Admin → Website Settings**.

## Coupons

`SEQ88` is seeded as an 88% percentage coupon. Admin can configure:

- active/inactive status
- percentage or fixed discount
- total claim limit (for example 10 total users)
- per-user claim limit (for example 1 use per user)
- used count

Coupon usage is checked again when the order is placed.

## Admin → storefront synchronization

When Firebase is configured, public data subscribes to Firestore in real time. Product, banner, service, store, hot-deal, testimonial, FAQ, article, news, coupon and website-setting changes can therefore appear to users without rebuilding the app.

Without Firebase, localStorage is used as a development fallback in the same browser.

## Firebase `.env`

Copy `.env.example` to `.env` and enter your Firebase project values.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_ADMIN_PASSWORD=Admin@123
VITE_UPI_ID=subhamdebasish225@okicici
VITE_UPI_PAYEE_NAME=OneTap Cashify
```

Enable **Email/Password** and **Google** in Firebase Authentication.
