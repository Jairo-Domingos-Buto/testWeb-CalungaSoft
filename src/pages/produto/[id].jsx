import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import ProdutHero from '../../sections/produt/ProdutImage'
import SecondHeader from '../../sections/produt/SecondHeader'
import ThirdHeader from '../../sections/produt/ThirdHeader'

export default function PageProduc() {
  return (
    <DefaultLayout>
      <SecondHeader/>
      <ThirdHeader/>
      <ProdutHero/>
    </DefaultLayout>
  )
}
