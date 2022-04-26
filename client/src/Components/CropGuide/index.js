
import {
  Modal,
  Container,
  Row,
  Col
} from "react-bootstrap"
// import arugula from "../../../public/photos/arugula.jpg"
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
              {/* <Row>
                <Col xs={12} md={8}>
                <div>
                <image src={arugula.jpg}></image>
                   </div>
                </Col>
                <Col xs={6} md={4}>
                {data.name}
                </Col>
              </Row> */}
              <Row>
                <Col style xs={6} md={4}>
                {data.name}
                </Col>
                <Col xs={6} md={4}>
                  sowing dates: {data.sowingDates}
                </Col>
                <Col xs={6} md={4}>
                  Harvest Window: {data.harvestwindow}
                </Col>
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