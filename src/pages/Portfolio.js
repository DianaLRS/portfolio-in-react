import React from "react";
import Cards from "../components/Cards/Cards";
import Container from "../components/Container/Conatiner";
import "./Portfolio.css"
// import Col from "../components/Grid/Col"
// import Row from "../components/Grid/Row"

function Portfolio(){

    return(
        <>
        <Container>
            {/* <Row>
            <Col> */}
            <Cards/>
            {/* </Col>
            </Row> */}
               
        </Container>

  
        </>
    )
}

export default Portfolio;