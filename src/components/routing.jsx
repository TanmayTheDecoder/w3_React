import React from 'react'
import '../css/commonclasses.css'
import '../css/colorpallete.css'
import '../css/media.css'
import { Route, Routes } from 'react-router-dom'
import { sideBarTutorialsData } from "../data/sideBar"
import { sideBarFormsData } from '../data/sideBar'
import { sideBarGraphicsData } from '../data/sideBar'
import { sideBarMediaData } from '../data/sideBar'
import { sideBarAPIData } from '../data/sideBar'
import { sideBarExamplesData } from '../data/sideBar'
import { sideBarReferencesData } from '../data/sideBar'
import PageNotFound from './pagenotnound'

const Routing = () => {

  return (
    <div>
        <section className="routing_content_container w100" id="content-container">
            <div className="routing_content_inner w100">
                <Routes>
                  {
                    sideBarTutorialsData.map((items) => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  {
                    sideBarFormsData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }  

                  {
                    sideBarGraphicsData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  {
                    sideBarMediaData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  {
                    sideBarAPIData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  {
                    sideBarExamplesData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  {
                    sideBarReferencesData.map(items => {
                      return (
                        <Route key={items.id} path={items.routeName} element={<items.routeElement />} />
                      )
                    })
                  }

                  <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </section>
    </div>
  )
}

export default Routing
