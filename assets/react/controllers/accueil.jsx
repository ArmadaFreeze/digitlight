import React from 'react';
import Link from '@mui/material/Link';
import Navbar from '../../components/navbar'
import Footer from '../../components/copyright'
import { useState, useEffect, useRef } from "react";
import LoadingComp from '../../components/loading'
import Item from '../../components/materiel'
import ItemStats from '../../components/itemStats'
import data from '../../constants/data.json'
import Skeleton from '@mui/material/Skeleton';
import Modalbutton from '../../components/modal_ajout';

function randomTime(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function AllItems({ page, loading, filter, setFilter, Items, setItem, CATEGORIES }) {

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

      </>) :
        (<><ItemStats Category={page} Filter={filter} onCatChange={(categorie) => setFilter(categorie)} ITEMS={Items} CAT={CATEGORIES} />
          {items(page, filter, Items, setItem, CATEGORIES)}
        </>)}
    </>
  )
}

const items = function (Category, filterValue, ITEMS, setItem, CATEGORIES) {

  if (filterValue != 0) {
    return ITEMS
      .filter(item => item.category == filterValue)
      .map(item =>
        <Item
          key={item.id}
          item={item}
          ITEMS={ITEMS}
          setItem={setItem}
          cat={(CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name)))} />)
  }

  if (Category == null || Category == '' || Category == '0') {

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

  else {
    return ITEMS
      .filter(item => (CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name))) == Category)
      .map((item) =>
      (<Item
        key={item.id}
        item={item}
        ITEMS={ITEMS}
        cat={(CATEGORIES.filter(cat => (cat.id === item.category)).map(cat => (cat.name)))}
      />
      ))
  }
}

export default function Accueil() {

  const ITEMS = data.items;
  const CATEGORIES = data.categories;

  const [Items, setItem] = useState(ITEMS);

  const [filter, setFilter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, randomTime(800, 1000))
  }, [])

  function removeOpacity() {

    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }

    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }

  return (
    <>
      <LoadingComp />
      <main id="main" className="main">
        <div className="body">
          <header className="panelHeader">
            <ul className="breadcrumb">
              <li>
                <Link href="/accueil">
                  Accueil
                </Link>
              </li>
              <li>
                Materiel
              </li>
            </ul>

            <Modalbutton Items={Items} setItem={setItem}/>

          </header>

          <Navbar />
          <section className="container">
            <AllItems page="" loading={loading} filter={filter} setFilter={setFilter} Items={Items} setItem={setItem} CATEGORIES={CATEGORIES} />
            <Footer />
          </section>
        </div>
      </main>

      {loading ? (<></>) :
        (<>{removeOpacity()}</>)}
    </>
  )
}
