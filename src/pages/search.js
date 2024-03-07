import React from 'react'
import Nav from '@/components/profile/Nav'
import Search from '@/components/search/Search'
import PageHeader from '@/components/general/PageHeader'

export default function search() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-10 bg-black">
        <div className="container-fluid">
          <div className="row">
            <PageHeader text={"Search"} />
            <div className='other-contain-info'>
                <Search />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
