'use client'

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({children}) => {
  return (
    <CProvider
    mode="payment"
    cartMode="client-only"
    stripe="pk_test_51OcgH5Ez0mGeizVoGsEgjaX6nkS6QkzoiOYIj83IWsZjwbpnAuD6o2M2KtvsvkqxDiYee0rjCuMNIYpDC3mPvc4G00oxYQeazT"
    successUrl="https://e-commerce-website-brown.vercel.app/stripe/success"
    cancelUrl="https://e-commerce-website-brown.vercel.app/stripe/error"
    language="en-US"
    currency="USD"
    billingAddressCollection={true}
    shouldPersist={true}
    >
    {children}
    </CProvider>
  )
}

export default CartProvider
