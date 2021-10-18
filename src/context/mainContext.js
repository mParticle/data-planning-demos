import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { toast } from "react-toastify"
import "../styles/custom.css"
import ToastSuccess from "../components/heroComponents/ToastSuccess"

const mainQuery = graphql`
  query {
    navInfo {
      data
    }
  }
`

const STORAGE_KEY = "GATSBY_ECOMMERCE_STARTER_"

const initialState = {
  cart: [],
  numberOfItemsInCart: 0,
  total: 0,
}

const SiteContext = React.createContext()

function calculateTotal(cart) {
  const total = cart.reduce((acc, next) => {
    const quantity = next.quantity
    acc = acc + JSON.parse(next.price) * quantity
    return acc
  }, 0)
  return total
}

class ContextProviderComponent extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (!storageState) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
      }
    }
  }

  setItemQuantity = item => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cart } = storageState
    const index = cart.findIndex(cartItem => cartItem.id === item.id)
    cart[index].quantity = item.quantity
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )

    this.forceUpdate()
  }

  addToCart = item => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cart } = storageState
    if (cart.length) {
      const index = cart.findIndex(cartItem => cartItem.id === item.id)
      if (index >= Number(0)) {
        /* If this item is already in the cart, update the quantity */
        cart[index].quantity = cart[index].quantity + item.quantity
      } else {
        /* If this item is not yet in the cart, add it */
        cart.push(item)
      }
    } else {
      /* If no items in the cart, add the first item. */
      cart.push(item)
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )
    toast("Successfully added item to cart!", {
      position: toast.POSITION.TOP_LEFT,
    })

    //mParticle Tracking
    var product = window.mParticle.eCommerce.createProduct(
      item.name, // Name
      item.id, // SKU
      item.price, // Price
      item.quantity // Quantity
    )

    var transactionAttributes = {
      Id: Math.random()
        .toString(36)
        .substr(2, 9),
    }

    var customAttributes = {
      brand: item.brand,
      categories: item.categories.toString(),
    }

    var customFlags = null
    window.mParticle.eCommerce.logProductAction(
      window.mParticle.ProductActionType.AddToCart,
      product,
      customAttributes,
      customFlags,
      transactionAttributes
    )

    this.forceUpdate()
  }

  removeFromCart = item => {
    console.log("removeFromCart clicked")
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    let { cart } = storageState
    cart = cart.filter(c => c.id !== item.id)

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )

    //mParticle Tracking
    var product = window.mParticle.eCommerce.createProduct(
      item.name, // Name
      item.id, // SKU
      item.price, // Price
      item.quantity // Quantity
    )

    // window.mParticle.eCommerce.logProductAction('mParticle.ProductAction.remove_from_cart', product)

    window.mParticle.eCommerce.logProductAction(
      window.mParticle.ProductActionType.RemoveFromCart,
      product,
      customAttributes,
      customFlags,
      transactionAttributes
    )

    toast(
      <ToastSuccess
        eventName="Remove From Cart"
        eventCategory="Commerce Action"
        product={item.name}
      ></ToastSuccess>,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "success-toast",
      }
    )

    var transactionAttributes = {
      Id: Math.random()
        .toString(36)
        .substr(2, 9),
    }

    var customAttributes = {
      brand: item.brand,
      categories: item.categories.toString(),
    }

    var customFlags = null

    this.forceUpdate()
  }

  clearCart = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
    this.forceUpdate()
  }

  render() {
    let state = initialState
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (storageState) {
        state = JSON.parse(storageState)
      }
    }

    return (
      <StaticQuery query={mainQuery}>
        {queryData => {
          return (
            <SiteContext.Provider
              value={{
                ...state,
                navItems: queryData,
                addToCart: this.addToCart,
                clearCart: this.clearCart,
                removeFromCart: this.removeFromCart,
                setItemQuantity: this.setItemQuantity,
              }}
            >
              {this.props.children}
            </SiteContext.Provider>
          )
        }}
      </StaticQuery>
    )
  }
}

export { SiteContext, ContextProviderComponent }
