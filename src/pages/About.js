import React from "react"
import {  NavLink, Outlet, useParams } from "react-router-dom"
const AboutItem = () => {
  const {slug} = useParams()
  const aboutData = [
    {
      slug: "app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      slug: "author",
      title: "About the Author",
      description:
        "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
    },
  ]
  const {title,description} = aboutData.find(({slug:name})=>name===slug)
 
    return <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

 
}
const About = () => { 
  return <>
  <h1>About page</h1>
  <ul>
    <li>
    <NavLink to='author'>
      About-author 
      </NavLink>
    </li>
    <li>
      <NavLink to='app'>
      About-app 
      </NavLink>
    </li>
  </ul>
  

  <Outlet />
  </>
   
  
}
export {About,AboutItem}