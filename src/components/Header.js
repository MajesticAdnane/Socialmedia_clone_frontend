import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../fllux/actions/authActions';

const Header = ({logout}) => {
    return (
        <Navbar bg="light" expand="md" sticky="top" style={NavStyle}>
            <Navbar.Brand href="#home">Networking App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Nav>
                <Nav>
                    <Router>
                        <Link to="/" style={{textDecoration : 'none'}}> <Nav.Link> Home </Nav.Link> </Link>
                        <Link to="/chatt" style={{textDecoration : 'none'}}> <Nav.Link> Chatt </Nav.Link> </Link>
                    </Router>
                    
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const NavStyle = {
    paddingLeft : 100,
    paddingRight : 100,
};

const mapStateToProps = (state) => {
    return {
      
    };
};

const mapActionsToProps = { logout };

export default connect(mapStateToProps, mapActionsToProps)(Header);