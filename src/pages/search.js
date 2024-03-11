import React from 'react'
import Nav from '@/components/profile/Nav'
import Search from '@/components/search/Search'
import PageHeader from '@/components/general/PageHeader'

export default function search() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-lg-10 px-sm-2 bg-black">
        <div className="container-fluid">
          <div className="row">
            <PageHeader text={"Search"} />
            <div className='vh-85 mh-100 h-100 overflow-y-hidden'>
              <Search />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
