import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "Amed Sackey",
          email: "amend@gmail.com",
          gen: 12,
          id: "fghfhdt46fg"
        },
        {
          name: "Adwoa",
          email: "adwoa@gmail.com",
          gen: 41,
          id: "fgh676jhghh"
        },
        {
          name: "Yaw Manu",
          email: "yawmanu@gmail.com",
          gen: 15,
          id: "fgjyyut6767ghh"
        },
        
      ]
    }
    }
    addNewUser = (user) => {
      user.id = Math.random().toString()
      this.setState({
        users:[...this.state.users, user]
      })
    }
    deleteUser = (id) => {
      let undeletedUsers = this.state.users.filter(user => user.id!== id );
      this.setState({
        users:undeletedUsers
      })
    }
    editUser = (id, updatedUser) =>{
      this.setState({
        users: this.state.users.map(user => user.id === id ? updatedUser: user)
      })
    }
    
  render() {
  return (
  <>
  <Container fluid style={{marginTop:"2rem"}}>
    <Row>
    <Col md='4'>
      <AddUserForm addUser = {this.addNewUser}/> 
    </Col>
    <Col>
    <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
    </Col>
    </Row>
  </Container>
  </>
  );
  }
}

export default App;
