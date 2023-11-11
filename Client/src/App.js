import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Form, Container, Row, Col, Badge, Image, InputGroup, FormControl, } from 'react-bootstrap';
import $, { data } from "jquery";
import moment from 'moment';

<script src="https://cdn.jsdelivr.net/npm/ajax-client@2.0.2/lib/ajax-client.min.js"></script>



function App() {


  const onClickCaptureHandler = () => {

    var div = document.getElementById('printButton');
    div.style.display = 'none';

    setTimeout(PrintTimer, 100);

  };

  $( document ).ready(function() {
    document.getElementById("currentDate").innerHTML = new moment().format('llll'); // Sat, Nov 11, 2023 8:07 AM
});

  const PrintTimer = () => {

    window.print();

  };

  function Controller() {

    var itemCount = document.getElementById("itemNumberID").value;
    document.getElementById("itemBarcode").src = "https://barcode.orcascan.com/?data=" + itemCount;

    var caseCount = document.getElementById("caseCountID").value;
    document.getElementById("caseBarcode").src = "https://barcode.orcascan.com/?data=" + caseCount;

    var caseEach = document.getElementById("caseEachID").value;
    document.getElementById("eachBarcode").src = "https://barcode.orcascan.com/?data=" + caseEach;

    var Calculator = document.getElementById("Testing").value;

    var Results = Calculator * caseCount;
    document.getElementById("caseEachID").value = Results;

  }

  return (
    <div className="App">
      <header className="App-header">


        <Container fluid className='mr-auto p-2'>

          <Card className='mb-1' style={{ color: "#000" }}>
            <Card.Title className='fs-1 mb-1'>License Plate</Card.Title>
            <Form>
              <Form.Group controlId='formLicensePlate2'>
                <Row>
                  <Col>
                    <Form.Label className='mb-1'>Item Number:</Form.Label>
                    <Form.Control id='itemNumberID' className='text-center mb-1' type='text' placeholder='Enter Item Number' onChange={Controller}  ></Form.Control>

                    <Image id='itemBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterItemNumber"} onChange={Controller} rounded />

                  </Col>
                  <Col>
                    <Form.Label className='mb-1'>Case Count:</Form.Label>
                    <Form.Control id='caseCountID' className='text-center mb-1' type='text' placeholder='Enter Case Count' onChange={Controller}></Form.Control>
                    <Image id='caseBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterCaseNumber"} onChange={Controller} rounded />

                  </Col>
                </Row>

                <Form.Label className='mb-1'>Case QTY</Form.Label>
                <Form.Control id='Testing' className='text-center mb-1' type='text' placeholder='Case QTY' onChange={Controller} ></Form.Control>

                <Row>

                  <Col>
                    <Form.Label className='mb-1'>Each's</Form.Label>
                    <Form.Control id='caseEachID' className='text-center mb-5' type='text' onChange={Controller} disabled></Form.Control>
                    <Image id='eachBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterEachNumber"} onChange={Controller} rounded />

                  </Col>
                </Row>

                <Container>
                  <Button id='printButton' className='mb-1' onClickCapture={onClickCaptureHandler}>Print</Button>
                </Container>

                

                <p id='currentDate' value="">Date goes here</p>

              </Form.Group>
            </Form>
          </Card>
        </Container>

      </header>
    </div>
  );
}

export default App;
