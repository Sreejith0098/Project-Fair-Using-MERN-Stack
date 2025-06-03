import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
<>
<Header />
<div className="d-flex justify-content-between mt-2 my-2">
    <h1>All Projects</h1>
    <input placeholder='Search Products by name' className='w-25 form-control' type="text" />
</div>
<Row>
    <Col lg={4} md={6} sm={12}>
    <ProjectCard />
    </Col>
</Row>
</>
  )
}

export default Projects