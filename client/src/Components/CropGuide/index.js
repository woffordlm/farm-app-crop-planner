
import {
  Modal,
  Container,
  Row,
  Col
} from "react-bootstrap"

function MydModalWithGrid(props) {
    console.log('props:', props)
    console.log ("hitttttt", props.data)
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Vegetable Reference
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {props.data?.allCrops?.map(data => (
            <div>
              <Row>
                <Col xs={6} md={4}>
                  <img style = {{width:"100%", height: "100%"}} alt="vegetable" src ={`/photos/${data.name}.jpg`}      />         
                </Col>
                <Col xs={6} md={4}>Harvest Window: {data.harvestwindow} days</Col>  

                <Col xs={6} md={4}>sowing dates: {data.sowingDates}
                <br/>
                </Col>
                <Row>
                <Col xs={6} md={4}>{data.name}</Col>

                </Row> 
              </Row>
              <hr/>
              </div>
            ))}
            
          </Container>
        </Modal.Body>

      </Modal>
    );
  }
  
  export default MydModalWithGrid;