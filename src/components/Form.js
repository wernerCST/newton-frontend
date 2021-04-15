import React from 'react'
import './Form.css';
import { Container, Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap'; 


function Form() {
    return (
        <div className='form-container'>
         <section className='form-heading'>
             Please log in
         </section>  
         <section className='form-body'>
            <Container className='form'>
                <Row>
                    <Col class="col-xs-6 col-sm-6 col-md-6">
                        <FormGroup>
                            <label>Name</label>
                            <FormControl
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <br/>
                            <label>Email</label>
                            <FormControl
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col class="col-xs-1 col-sm-3 col-md-4">                    
                        <Button src='/contact' className='contact-btn'>Submitt</Button>
                    </Col>
                </Row>
            </Container>           
         </section>
         <div>
             
        </div>       
        </div>
    )
}

export default Form
