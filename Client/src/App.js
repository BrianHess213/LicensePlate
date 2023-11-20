import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Form, Container, Row, Col, Image, Nav, Navbar, NavDropdown, a, InputGroup } from 'react-bootstrap';
import $, { data } from "jquery";
import moment from 'moment';
import { Formik, useFormik } from "formik"
import ItemLookUp from './components/Item';



<script src="https://cdn.jsdelivr.net/npm/ajax-client@2.0.2/lib/ajax-client.min.js"></script>


function App() {

  $(document).ready(function () {
    document.getElementById("currentDate").innerHTML = new moment().format('llll'); // Sat, Nov 11, 2023 8:07 AM
  });

  const PrintTimer = () => {
    window.print();
  };

  const validate = values => {
    const errors = {}
    if (!values.item) {
      errors.item = 'Required'

    } else if (values.item) {
      var itemCount = document.getElementById("itemNumberID").value;
      document.getElementById("itemBarcode").src = "https://barcode.orcascan.com/?data=" + itemCount;

    }

    if (!values.case) {
      errors.case = 'Required'

    } else if (values.case) {
      var caseCount = document.getElementById("caseCountID").value;
      document.getElementById("caseBarcode").src = "https://barcode.orcascan.com/?data=" + caseCount;
    }

    if (!values.caseQTY) {
      errors.caseQTY = 'Required'

    } else if (values.caseQTY) {
      var Calculator = document.getElementById("Testing").value;

      var Results = Calculator * caseCount;
      document.getElementById("caseEachID").value = Results;

      Results = caseEach;

      var caseEach = document.getElementById("caseEachID").value;
      document.getElementById("eachBarcode").src = "https://barcode.orcascan.com/?data=" + caseEach;
    }

    if (!values.userName) {
      errors.userName = 'Required'

    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      item: '',
      case: '',
      caseQTY: '',
      userName: ''
    },
    validate,
    onSubmit: values => {
      PrintTimer();

    }
  });

  function testingThings(){

    let text = document.getElementById("testBarcode").value;
    document.getElementById("pTagTesting").innerHTML = text;
  }

  return (
    <div className="App">
      <header className="App-header">

     
 
        <div class="alert alert-primary d-print-none" role="alert">
        UPDATE:
        Added a function, so you no longer have to refresh to page to get the print button back. As it will no longer disappear once clicked. 
        Now you will be able to print the same values multiple times until you need to change them. 
        </div>



        <Container fluid className='mr-auto p-2'>

          <Card className='mb-1' border='0' style={{ color: "#000"}}>
            <Card.Title className='fs-1'>License Plate</Card.Title>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId='formLicensePlate2'>
                <Row>
                  <Col>
                    <Form.Label className=''>Item Number:</Form.Label>
                    <Form.Control id='itemNumberID' name='item' className='text-center' type='text' placeholder='Enter Item Number' onBlur={formik.handleBlur} value={formik.values.item} onChange={formik.handleChange} plaintext ></Form.Control>
                    {formik.touched.item && formik.errors.item ? <div class="text-danger">{formik.errors.item}</div> : null}
                    <Image id='itemBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterItemNumber"} onChange={formik.handleChange} rounded />
                  </Col>

                  <Col>
                    <Form.Label className=''>Case Count:</Form.Label>
                    <Form.Control id='caseCountID' name='case' className='text-center' type='text' placeholder='Enter Case Count' value={formik.values.case} onBlur={formik.handleBlur} onChange={formik.handleChange} plaintext></Form.Control>
                    {formik.touched.case && formik.errors.case ? <div class="text-danger">{formik.errors.case}</div> : null}
                    <Image id='caseBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterCaseNumber"} onChange={formik.handleChange} rounded />

                  </Col>

                  <Form.Label className=''>Case QTY</Form.Label>
                  <Form.Control id='Testing' name='caseQTY' className='text-center' type='text' placeholder='Case QTY' value={formik.values.caseQTY} onBlur={formik.handleBlur} onChange={formik.handleChange} plaintext ></Form.Control>
                  {formik.touched.caseQTY && formik.errors.caseQTY ? <div class="text-danger">{formik.errors.caseQTY}</div> : null}

                  <Col>
                    <Form.Label className=''>Eaches:</Form.Label>
                    <Form.Control id='caseEachID' className='text-center' type='text' onChange={formik.handleChange} disabled plaintext></Form.Control>

                    <Container>
                      <Image id='eachBarcode' className='img-fluid h-25 w-50' src={"https://barcode.orcascan.com/?data=EnterEachNumber"} onChange={formik.handleChange} rounded />
                    </Container>


                  </Col>
                  <Container>

                  </Container>

                  <Col>
                    <Form.Control name='userName' className='text-center' placeholder='Enter Name' type='text' value={formik.values.userName} onBlur={formik.handleBlur} onChange={formik.handleChange} plaintext></Form.Control>
                    {formik.touched.userName && formik.errors.userName ? <div class="text-danger">{formik.errors.userName}</div> : null}
                  </Col>

                  <Col>
                    <p id='currentDate' value="">Date goes here!</p>
                  </Col>

                </Row>
              </Form.Group>
            </Form>
          </Card>
        </Container>

    
        <Button id='printButton' className='d-print-none' type='submit' onClickCapture={formik.handleSubmit}>Print</Button>


        <Container className='d-print-none'>
          <ItemLookUp />

          <input id='testBarcode' onChange={testingThings} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
          <p id='pTagTesting'>hello</p>
        </Container>

      </header>
    </div>
  );
}

export default App;
