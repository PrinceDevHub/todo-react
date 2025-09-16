import React, { Component } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = { userInput: "", list: [] };

  updateInput = (val) => this.setState({ userInput: val });

  addItem = () => {
    const { userInput, list } = this.state;
    if (userInput.trim()) {
      this.setState({ list: [...list, { id: Math.random(), value: userInput }], userInput: "" });
    }
  };

  deleteItem = (id) => this.setState({ list: this.state.list.filter(item => item.id !== id) });

  editItem = (index) => {
    const edited = prompt("Edit the todo:", this.state.list[index].value);
    if (edited && edited.trim()) {
      const list = [...this.state.list];
      list[index].value = edited;
      this.setState({ list });
    }
  };

  render() {
    const { userInput, list } = this.state;
    return (
      <Container>
        <Row className="justify-content-center" style={{ fontSize: "6rem", fontWeight: "bold" }}>
          TODO LIST
        </Row>
        <hr />
        <Row className="justify-content-center mb-4">
          <Col md={5}>
            <InputGroup>
              <FormControl
                placeholder="Add item..."
                size="lg"
                value={userInput}
                onChange={(e) => this.updateInput(e.target.value)}
              />
              <Button variant="dark" onClick={this.addItem}>ADD</Button>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5}>
            <ListGroup>
              {list.map((item, i) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between" action variant="dark">
                  {item.value}
                  <span>
                    <Button variant="light" size="sm" onClick={() => this.deleteItem(item.id)} style={{ marginRight: 8 }}>
                      Delete
                    </Button>
                    <Button variant="light" size="sm" onClick={() => this.editItem(i)}>Edit</Button>
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
