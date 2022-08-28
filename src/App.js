import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Category from './components/Category'
import ItemsList from './components/ItemsList'
import { items } from './data'

function App() {
  const [itemsData, setItemsData] = useState(items)

  // Get All Category uniqe
  const allCat = ['All', ...new Set(items.map((i) => i.category))]
  console.log(allCat)
  // Fillter By Category
  const fillterByCategory = (cat) => {
    if (cat === 'All') {
      setItemsData(items)
    } else {
      const newArray = items.filter((item) => item.category === cat)
      setItemsData(newArray)
    }
  }

  // Fillter By Search From
  const fillterBySearch = (word) => {
    if (word !== '') {
      const newArray = items.filter((item) => item.title === word)
      setItemsData(newArray)
    }
  }

  return (
    <div className="color-body font">
      <NavBar fillterBySearch={fillterBySearch} />

      <Container>
        <Header />
        <Category fillterByCategory={fillterByCategory} allCat={allCat} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  )
}

export default App
