import Select from 'react-select';
import EldoradoLogo from '../../assets/images/EldoradoLogo.png';
import Profile from '../../assets/images/Profile.png';
import { Nav, Navbar, NavDropdown, Button, FormControl, InputGroup, Col } from "react-bootstrap";
import './Navigationbar.css'
import 'font-awesome/css/font-awesome.min.css';

const Categories = [
    {label: 'Groceries', value: 'Groceries'},
    {label: 'Clothes', value: 'Clothes'},
    {label: 'Books', value: 'Books'},
    {label: 'Medicines', value: 'Medicines'},
    {label: 'Fruits', value: 'Fruits'}
]

const Navigationbar = () => {
    return(
        <div className="navigation-bar">
            <Navbar expand="lg" bg="light">
                <div className="w-20">
                    <Navbar.Brand to="#"><img className="eldoradoLogo" src={EldoradoLogo} alt=""/></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="w-80">
                    {/* <div className="navBarPart">
                        <div className="search">
                            <div className="category-dropdown">
                                <Select placeholder="Search by Category"
                                    defaultValue={{ label: "All", value: "All" }}
                                    options={Categories} 
                                />
                            </div>
                            <div className="search-box">
                                <Form className="d-flex">
                                    <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </div>
                            </div>
                    </div> */}
                    <Col xs={3} md={6} lg={8}>
                     <InputGroup className="col-xs-3">
                        <Select placeholder="Search by Category" defaultValue={{ label: "All", value: "All" }} options={Categories} />
                        <FormControl type="search" placeholder="Search"  aria-label="Search" />
                        <Button className="search-icon"><i className="fa fa-search"></i></Button>
                    </InputGroup>
                    </Col>

                    <div className="navBarPart">
                        <div className="user-profile">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <NavDropdown title={<img className="proPic" src={Profile} alt=""/>} id="navbarScrollingDropdown">
                                    <NavDropdown.Item to="/profile">My Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item to="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
)};

export default Navigationbar;