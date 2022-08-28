import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({ fillterByCategory, allCat }) => {
  
  // ToFIlter By Category
  const onFilter = (cat) => {
    fillterByCategory(cat)
  }

  return (
    <Row my-2 mb-5>
      <Col sm="12" className="d-flex justify-content-center">
        {
          allCat.length >= 1? (allCat.map((cat)=>{
          return(<div>
          <button onClick={() => onFilter(cat)} style={{ border: '1px solid #228be6' }} className="btn mx-2">
            {cat}
          </button>
          
        </div>)
          })):<h3>Undefound</h3>
        }
        
      </Col>
    </Row>
  )
}

export default Category
