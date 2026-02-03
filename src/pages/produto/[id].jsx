import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import ProdutHero from '../../sections/produt/ProdutImage'
import SecondHeader from '../../sections/produt/SecondHeader'
import ThirdHeader from '../../sections/produt/ThirdHeader'
import ProdutRelacionate from '../../sections/produt/ProdutRelacionate'
import Services from '../../sections/produt/Services'

export default function PageProduc() {
  return (
    <DefaultLayout>
      <ThirdHeader/>
      <ProdutHero/>
      <ProdutRelacionate/>
      <Services/>
    </DefaultLayout>
  )
}
