import React from 'react'
import { Row, Card, Col, CardGroup } from 'react-bootstrap'

const ItemsList = ({itemsData}) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Col key={item.id} sm="3" className="my-5">
              <CardGroup className="mb-5">
                <Card className="mx-3" style={{ backgroundColor: '#f8f8f8' }}>
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title>
                      <div className="item-title">{item.title}</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="item-description">
                       {item.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted d-flex justify-content-center">
                      <div className="item-price">{item.price}</div>
                    </small>
                  </Card.Footer>
                </Card>
                
                
              </CardGroup>
            </Col>
          )
        })
      ) : (
        <h3 className="text-center">Undefound</h3>
      )}
    </Row>
  )
}

export default ItemsList
