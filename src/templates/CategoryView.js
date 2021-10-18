import React from "react"
import ListItem from "../components/ListItem"
import { titleIfy, slugify } from "../../utils/helpers"
import CartLink from "../components/CartLink"
import { toast } from "react-toastify"
import "../styles/custom.css"
import ToastSuccess from "../components/heroComponents/ToastSuccess"

const CategoryView = props => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    console.log(props)
    let customAttributes = props.pageContext.title
    window.mParticle.logPageView("Screen View", customAttributes)
    toast(
      <ToastSuccess
        eventName="Category"
        eventCategory="Screen View"
        product={props.pageContext.title}
      ></ToastSuccess>,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "success-toast",
      }
    )
  }
  const {
    pageContext: {
      title,
      content: { items = [] },
    },
  } = props

  return (
    <>
      <CartLink />
      <div className="flex flex-col items-center">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10 pb-8">
            <h1 className="text-5xl font-light">{titleIfy(title)}</h1>
          </div>

          <div>
            <div className="flex flex-1 flex-wrap flex-row">
              {items.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    link={slugify(item.name)}
                    title={item.name}
                    price={item.price}
                    imageSrc={item.image}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryView
