/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { titleIfy, slugify } from "../../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"
import Select from "react-select"
import userRecords from "../../providers/users"
import ToastSuccess from "../components/heroComponents/ToastSuccess"
import "../styles/custom.css"

const isBrowser = typeof window !== "undefined"

const customStyles = {
  control: (_, { selectProps: { width } }) => ({
    width: "200px",
  }),
}

toast.configure({
  hideProgressBar: true,
})

const logo = require("../images/logo.png")

const users = []
Object.keys(userRecords).forEach(key => {
  users.push({ value: key, label: key })
})

function switchUser(data) {
  const newUser = userRecords[data.value]

  const identityRequest = {
    userIdentities: {
      first_name: newUser.first_name,
      email: newUser.email,
      customerid: newUser.cc,
      zip: newUser.zip,
    },
  }

  var identityCallback = function(result) {
    if (result.getUser()) {
      let eventMessage = "Log in -- Successful"
      if (isBrowser) {
        window.mParticle.logEvent(
          eventMessage,
          window.mParticle.EventType.Other
        )

        toast(
          <ToastSuccess
            eventName="Log in -- Successful"
            eventCategory="Commerce Action"
            product={newUser.first_name}
          ></ToastSuccess>,
          {
            position: toast.POSITION.TOP_RIGHT,
            className: "success-toast",
          }
        )
        window.mParticle.Identity.getCurrentUser().setUserAttribute(
          "$FirstName",
          identityRequest.userIdentities.first_name
        )
        window.mParticle.Identity.getCurrentUser().setUserAttribute(
          "$LastName",
          identityRequest.userIdentities.last_name
        )
        window.mParticle.Identity.getCurrentUser().setUserAttribute(
          "$Zip",
          identityRequest.userIdentities.zip
        )
        window.mParticle.Identity.getCurrentUser().setUserAttribute(
          "$Email",
          identityRequest.userIdentities.email
        )
      } else {
        if (isBrowser) {
          window.mParticle.logEvent(
            "Log in -- Failed",
            window.mParticle.EventType.Other
          )
          toast(
            <ToastSuccess
              eventName="Log in -- Failed"
              eventCategory="Commerce Action"
              product={newUser.first_name}
            ></ToastSuccess>,
            {
              position: toast.POSITION.TOP_LEFT,
              className: "success-toast",
            }
          )
        }
      }
    }
  }
  if (isBrowser) {
    window.mParticle.logEvent(
      "Log in -- Attempted",
      window.mParticle.EventType.Other
    )
    window.mParticle.Identity.login(identityRequest, identityCallback)
  }
}

function switchConsent(data) {
  if (isBrowser) {
    const user = window.mParticle.Identity.getCurrentUser()
    const consented = data.value === "accept"
    let customAttributes = {
      consent_to_marketing: true,
      screen_url: window.location.href,
    }
    window.mParticle.logEvent(
      "Set Marketing Consent",
      window.mParticle.EventType.Other,
      customAttributes
    )
    toast(
      <ToastSuccess
        eventName="Set Marketing Consent"
        eventCategory="Custom Event"
        product="current user"
      ></ToastSuccess>,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "success-toast",
      }
    )
  }
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ContextProviderComponent>
        <SiteContext.Consumer>
          {context => {
            console.log("baselayout rerendering...")
            let {
              navItems: {
                navInfo: { data: links },
              },
            } = context

            links = links.map(link => ({
              name: titleIfy(link),
              link: "/" + slugify(link),
            }))
            links.unshift({
              name: "Home",
              link: "/",
            })

            return (
              <div className="min-h-screen">
                <nav>
                  <div className="flex justify-center">
                    <div
                      className="
                    w-fw
                    mobile:px-10 desktop:px-0 px-4 pt-10 pb-6
                    flex flex-col
                    sm:flex-row"
                    >
                      <Link to="/">
                        <img
                          className="mb-4 w-24 mw-24 sm:w-20 sm:mr-16"
                          alt="Logo"
                          src={logo}
                        />
                      </Link>
                      <div className="flex flex-wrap">
                        {links.map((l, i) => (
                          <Link to={l.link} key={i}>
                            <p
                              key={i}
                              className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold"
                            >
                              {l.name}
                            </p>
                          </Link>
                        ))}
                      </div>

                      {/* <div className="flex flex-1 justify-end pr-4 relative">
                        <Link to="/cart">
                          <FaShoppingCart />
                        </Link>
                        {
                          numberOfItemsInCart > Number(0) && (
                            <div>
                              <FaCircle />
                            </div>
                          )
                        }
                      </div> */}
                    </div>
                  </div>
                </nav>
                <div className="mobile:px-10 px-4 pb-10 flex justify-center">
                  <main className="w-fw">{children}</main>
                </div>
                <footer className="flex justify-center">
                  <div className="flex w-fw px-8 desktop:px-0 border-solid border-t border-gray-300 items-center">
                    <span className="block text-gray-700 pt-4 pb-8 mt-2 text-xs">
                      Copyright © 2020 JAMstack Ecommerce. All rights reserved.
                    </span>
                    <div className="flex flex-1 justify-end">
                      <Select
                        placeholder={"Select User"}
                        styles={customStyles}
                        options={users}
                        onChange={switchUser}
                      />
                      <Select
                        placeholder={"Accept Marketing"}
                        styles={customStyles}
                        options={[
                          { value: "accept", label: "Accept" },
                          { value: "deny", label: "Deny" },
                        ]}
                        onChange={switchConsent}
                      />
                    </div>
                  </div>
                </footer>
              </div>
            )
          }}
        </SiteContext.Consumer>
      </ContextProviderComponent>
    )
  }
}

export default Layout
