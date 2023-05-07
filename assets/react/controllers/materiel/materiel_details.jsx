import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import data from '../../../constants/data.json'
import Item from '../../../components/materiel_details'
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect, useRef } from "react";
import React from 'react';

function randomTime(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
};

const itemDetail = function (itemName) {

  const ITEMS = data.items;
  const CATEGORIES = data.categories;

  return ITEMS
    .filter(item => capitalizeWords(item.name) == capitalizeWords(itemName))
    .map((item) =>
    (<Item
      key={item.id}
      item={item}
      cat={(CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name)))}
    />
    ))
}

function itemInfo(itemName) {

  const ItemImage = () => (
    <Skeleton
      animation="wave"
      variant="rounded"
      width="80%"
      height='55%'
      sx={{
        marginLeft: '10%',
      }} />)

  const TextTitle = () => (
    <Skeleton
      variant="rounded"
      width="50%"
      height='3%'
      sx={{
        marginLeft: '10%',
        marginTop: '1%',
      }} />)

  const TextDescription = () => (
    <Skeleton
      variant="rounded"
      width="80%"
      height='2%'
      sx={{
        marginLeft: '10%',
        marginTop: '3%',
      }} />)

  const Button = () => (
    <Skeleton
      animation="wave"
      variant="rounded"
      width="50%"
      height='3%'
      sx={{
        marginLeft: '10%',
        marginTop: '8%',
      }} />)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, randomTime(500, 1000))
  }, [])

  return (
    <>
      {loading ? (<>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>

          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><ItemImage /></span>

          <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TextTitle />
            {[...Array(8).keys()].map((item) => (<TextDescription key={item} />))}
            <Button />
          </span>
        </div>

      </>) : (<>{itemDetail(itemName)}
      </>)}
    </>
  )
}


export default function Details(props) {

  return (
    <>
      <main className="main">
        <div className="body">

          <Header title={props.cat} item={props.item} />
          <Navbar />

          <section className="InfoItem">
            {itemInfo(props.item)}
            <Footer />
          </section>
        </div>
      </main>
    </>
  )
}