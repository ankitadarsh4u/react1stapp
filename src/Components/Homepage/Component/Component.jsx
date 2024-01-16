import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';


function Component() {

  const data = [{
                  icon : "fa-solid fa-house fs-1",
                   title : "Courses ",
                  subtitle : "24 Hours Support"
                },{
                  icon : "fa-solid fa-house fs-1",
                   title : "Front End ",
                  subtitle : "24 Hours Support"
                },{
                  icon : "fa-solid fa-house fs-1",
                   title : "React JS",
                  subtitle : "24 Hours Support"
                },{
                  icon : "fa-solid fa-house  fs-1",
                   title : "Java  ",
                  subtitle : "24 Hours Support"
                },{
                  icon : "fa-solid fa-house fs-1",
                   title : "Python ",
                  subtitle : "24 Hours Support"
                }]

  const Column = ({data})=>{
    return(
      <>
      <Col className='text-center p-5 shadow border my-2 border-rounded '>
          <div className="icon-box py-5 px-3 rounded-circle border border-dark ">
          <i className={data.icon}></i>
          </div>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
       </Col>
      </>
    );
  }
  return (
    <Container>
      <Row>
       {
        data.map((item,index)=>{
          return  <Column data={item} key={index}/>
          
        })
       }
     
       
      </Row>
    </Container>
  )
}

export default Component;
