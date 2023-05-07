import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import Item from '../../../components/materiel'
import ItemStats from '../../../components/itemStats'
import { useState, useEffect, useRef } from "react";
import data from '../../../constants/data.json'
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

function randomTime(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function allItems(page) {

  const ITEMS = data.items;
  const CATEGORIES = data.categories;

  const [loading, setLoading] = useState(true)

  const [Items, setItem] = useState(ITEMS);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, randomTime(500, 1000))
  }, [])

  const SkeletonBreadcrumb = () => (
    <span style={{
      height: '4%',
    }}>
      <Skeleton variant="text"
        width="30%"
        height='80%'
        sx={{
          marginLeft: '5%',
          marginTop: '1.5%',
        }} />
    </span>)

  const SkeletonItem = () => (
    <Skeleton variant="rounded"
      width="45%"
      height='15%'
      sx={{
        marginLeft: '1%',
        marginTop: '3%',
      }} />)

  return (
    <>
      {loading ? (<>

        <SkeletonBreadcrumb />
        {[...Array(8).keys()].map((item) => (<SkeletonItem key={item} />))}

      </>) : (<>
        <ItemStats Category={page} ITEMS={Items} CAT={CATEGORIES} />
        {items(page, Items, setItem, CATEGORIES)}
      </>)}
    </>
  )
}

const items = function (Category, ITEMS, setItem, CATEGORIES) {
  console.log(Category)

  if (Category == null || Category == '') {
    {
      return ITEMS
        .filter(item => item.available)
        .map(item => (
          <Item
            key={item.id}
            item={item}
            ITEMS={ITEMS}
            setItem={setItem}
            cat={(CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name)))}
          />))
    }
  }
  else {
    {
      return ITEMS
        .filter(item => (CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name))) == Category)
        .map((item) =>
        (<Item
          key={item.id}
          item={item}
          ITEMS={ITEMS}
          setItem={setItem}
          cat={(CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name)))}
        />
        ))
    }
  }
}

export default function Telephonique() {

  return (
    <>
      <main className="main">
        <div className="body">

          <Header title="Téléphonique" item="" />
          <Navbar />

          <section className="container">
            {allItems("téléphonique")}
            <Footer />
          </section>
        </div>
      </main>
    </>
  )
}