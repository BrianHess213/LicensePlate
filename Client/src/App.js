import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Form, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import $, { data } from "jquery";
import moment from 'moment';
import { Formik, useFormik } from "formik"

<script src="https://cdn.jsdelivr.net/npm/ajax-client@2.0.2/lib/ajax-client.min.js"></script>



function App() {


  const onClickCaptureHandler = () => {

    var div = document.getElementById('printButton');
    div.style.display = 'none';

    setTimeout(PrintTimer, 100);

  };

  $(document).ready(function () {
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

    var Calculator = document.getElementById("Testing").value;

    var Results = Calculator * caseCount;
    document.getElementById("caseEachID").value = Results;

    Results = caseEach;

    var caseEach = document.getElementById("caseEachID").value;
    document.getElementById("eachBarcode").src = "https://barcode.orcascan.com/?data=" + caseEach;
  }


  const validate = values => {
    const errors = {}
    if (!values.item) {
      errors.item = 'Required'
    } else if (values.item.lenght < 4) {
      errors.item = 'Must Enter Valid Item Number'
    }

    if (!values.case) {
      errors.case = 'Required'
    } else if (values.case.lenght < 1) {
      errors.case = 'Must Enter Valid Case Count'
    }

    if (!values.caseQTY) {
      errors.caseQTY = 'Required'
    } else if (values.item.lenght < 1) {
      errors.caseQTY = 'Must Enter Valid Case QTY'
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      item: '',
      case: '',
      caseQTY: ''
    },
    validate,
    onSubmit: values => {
      console.log("Formik fired.")
    }
  });


  return (
    <div className="App">
      <header className="App-header">


        <Container fluid className='mr-auto p-2'>

          <Card className='mb-1' style={{ color: "#000" }}>
            <Card.Title className='fs-1 mb-1'>License Plate</Card.Title>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId='formLicensePlate2'>
                <Row>
                  <Col>
                    <Form.Label className='mb-1'>Item Number:</Form.Label>
                    <Form.Control id='itemNumberID' name='item' className='text-center mb-1' type='text' placeholder='Enter Item Number' onBlur={formik.values.item} value={formik.values.item} onChange={formik.handleChange} ></Form.Control>
                    {formik.errors.item ? <div>{formik.errors.item}</div>: null}

                    <Image id='itemBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterItemNumber"} onChange={Controller} rounded />

                  </Col>
                  <Col>
                    <Form.Label className='mb-1'>Case Count:</Form.Label>
                    <Form.Control id='caseCountID' name='case' className='text-center mb-1' type='text' placeholder='Enter Case Count' value={formik.values.case} onChange={formik.handleChange}></Form.Control>
                    {formik.errors.case ? <div>{formik.errors.case}</div>: null}
                    <Image id='caseBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterCaseNumber"} onChange={Controller} rounded />

                  </Col>
                </Row>

                <Form.Label className='mb-1'>Case QTY</Form.Label>
                <Form.Control id='Testing' name='caseQTY' className='text-center mb-1' type='text' placeholder='Case QTY' value={formik.values.caseQTY} onChange={formik.handleChange} ></Form.Control>
                {formik.errors.caseQTY ? <div>{formik.errors.caseQTY}</div>: null}

                <Row>

                  <Col>
                    <Form.Label className='mb-1'>Each's</Form.Label>
                    <Form.Control id='caseEachID' className='text-center mb-5' type='text' onChange={Controller} disabled plaintext></Form.Control>
                    <Image id='eachBarcode' className='img-fluid h-50 w-50' src={"https://barcode.orcascan.com/?data=EnterEachNumber"} onChange={Controller} rounded />

                  </Col>
                </Row>



                <Row>
                  <Col>
                    <Form.Control className='text-center mb-5' placeholder='Enter Name' type='text' plaintext></Form.Control>

                  </Col>
                  <Col>

                    <Container>
                      <Button id='printButton' className='mb-5' type='submit' onClickCapture={onClickCaptureHandler}>Print</Button>
                    </Container>

                  </Col>

                  <Col>
                    <p id='currentDate' value="">Date goes here</p>

                  </Col>
                </Row>




              </Form.Group>
            </Form>
          </Card>
        </Container>

      </header>
    </div>
  );
}

export default App;
