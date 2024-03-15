import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <a className="navbar-brand" href="https://reasns.com"><Image src="/logo.png" alt="" height={30} width={30}/></a>
  )
}