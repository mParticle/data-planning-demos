import React, { useState } from "react"
import Popup from "reactjs-popup"

import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import CartLink from "../components/CartLink"
import Button from "../components/Button"
import Image from "../components/Image"
import QuantityPicker from "../components/QuantityPicker"
import Select from "react-select"
import { toast } from "react-toastify"
import "../styles/custom.css"
import ToastSuccess from "../components/heroComponents/ToastSuccess"

//Smartype
import * as smartype from "../../smartype-dist/web/smartype"
const api = new smartype.SmartypeApi()
api.addReceiver(smartype.mParticleReceiver())

// Check if window is defined 
const isBrowser = typeof window !== "undefined"

const ItemView = props => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const item = props.pageContext.content
  const { price, image, name, description, id, categories } = item
  const {
    context: { addToCart },
  } = props

  // Add Customization - Config (Standard collection)
  function handleConfigChange(selection) {
    window.mParticle.logEvent(
      "Add Customization - Config",
      window.mParticle.EventType.Other,
      {
        config: selection.value,
      }
    )

    toast.success(
      <ToastSuccess
        eventName="Add Customization -- Config"
        eventCategory="Custom Event"
        product={item.name}
      ></ToastSuccess>,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "success-toast",
      }
    )
  }

  const configOptions = [
    { value: "two seater", label: "2-Seater" },
    { value: "three seater", label: "3-Seater" },
    { value: "sectional", label: "Sectional" },
  ]

  // Add Customization - Color (Smartype)
  function handleColorChange(selection) {
    const message = api.addCustomizationColor(
      new smartype.AddCustomizationColorData(
        new smartype.AddCustomizationColorDataCustomAttributes(selection.value)
      )
    )

    toast.success(
      <ToastSuccess
        eventName="Add Customization -- Color"
        eventCategory="Custom Event"
        product={item.name}
      ></ToastSuccess>,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "success-toast",
      }
    )
    api.send(message)
  }

  const colorOptions = [
    {
      value: new smartype.AddCustomizationColorDataCustomAttributesColor().BROWN(),
      label: "Brown",
    },
    {
      value: new smartype.AddCustomizationColorDataCustomAttributesColor().BLUE(),
      label: "Blue",
    },
    {
      value: new smartype.AddCustomizationColorDataCustomAttributesColor().GREEN(),
      label: "Green",
    },
    {
      value: new smartype.AddCustomizationColorDataCustomAttributesColor().LAVENDER(),
      label: "Lavender",
    },
    {
      value: new smartype.AddCustomizationColorDataCustomAttributesColor().YELLOW(),
      label: "Yellow",
    },
  ]

  const defaultColor = { label: "Blue", value: "blue" }
  const defaultConfig = { label: "2-Seater", value: "2-seater" }

  function addItemToCart(item) {
    item["quantity"] = numberOfitems
    addToCart(item)
    window.mParticle.eCommerce.logProductAction(
      "mParticle.ProductAction.add_to_cart",
      item
    )
  }

  let customAttributes = {
    id: id,
    name: name,
    categories: categories,
    "screen-url": props.location.pathname,
  }  

  if (isBrowser) {
    window.mParticle.logPageView("Product", customAttributes)
  }
  
  toast(
    <ToastSuccess
      eventName="Product"
      eventCategory="Screen View"
      product={customAttributes.name}
    ></ToastSuccess>,
    {
      position: toast.POSITION.TOP_RIGHT,
      className: "success-toast",
    }
  )
  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }

  return (
    <>
      <CartLink />
      <div
        className="py-12 flex flex-1 flex-col
      md:flex-row
      w-full
      my-0 mx-auto"
      >
        <div className="w-full md:w-1/2 h-112 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Popup
              modal
              trigger={
                <img
                  src={image}
                  className="max-w-lg m-0 max-h-96 w-64 md:w-full"
                  alt="Inventory item"
                />
              }
            >
              <Image src={image} alt="Inventory item" />
            </Popup>
          </div>
        </div>
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
          <h1 className="text-5xl font-light">{name}</h1>
          <h2 className="text-2xl tracking-tighter">${price}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
          <p className="text-black-600 text-sm">Color</p>
          <div className="mb-6">
            <Select
              options={colorOptions}
              defaultValue={defaultColor}
              onChange={handleColorChange}
            />
          </div>
          <p className="text-black-600 text-sm">Config</p>
          <div className="mb-6">
            <Select
              options={configOptions}
              defaultValue={defaultConfig}
              onChange={handleConfigChange}
            />
          </div>
          <div className="mb-6">
            <QuantityPicker
              increment={increment}
              decrement={decrement}
              numberOfitems={numberOfitems}
            />
          </div>
          <Button
            full
            title="Add to Cart"
            onClick={() => addItemToCart(item)}
          />
        </div>
      </div>
    </>
  )
}

function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {context => <ItemView {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default ItemViewWithContext
