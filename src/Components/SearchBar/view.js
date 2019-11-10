import React, { Component } from 'react'
import { Navbar, Button, Form, FormControl } from 'react-bootstrap'

export default class SearchBarView extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" style={{ display:"flex", justifyContent:"space-between" }}>
            <Navbar.Brand href="#home">Flickr Photo App</Navbar.Brand>
            <Form inline onSubmit={this.props.onSubmit} >
              <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                value={this.props.tag} name='tag' onChange={this.props.onChange}/>
              <Button variant="outline-light" type="submit">Search</Button>
            </Form>
          </Navbar>
      </div>
    )
  } 
}
