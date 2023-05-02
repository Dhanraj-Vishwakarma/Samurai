import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Media,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Logo from "../../../assets/img/logo.png";
import Profile from "../../../assets/img/profile.png";
import Dummy from "../../../assets/img/dummy-profile.png";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserList from "./UserList";
// import UserData from "../../../Data/users.json";
const UserAccount = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [birthModal, setBirthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [startDate, setStartDate] = useState();
  // const [startDate, setStartDate] = useState(new Date());
  const toggleNavbar = () => setCollapsed(!collapsed);
  const GenderToggle = () => setGenderModal(!genderModal);
  const birthToggle = () => setBirthModal(!birthModal);
  const addressToggle = () => setAddressModal(!addressModal);
  const phoneToggle = () => setPhoneModal(!phoneModal);

  const [UserData, setUserData] = useState({
    name: "Dave Allen",
    gender: "Male",
    address: "18 Address Place, St Brelade, Jersey JE3 8JU",
    email: "daveallen@samuraikickboxing.com",
    dob: "05/02/2023",
    phone: "+91 123456 7890",
  });
  const [name, setName] = useState(UserData?.name);
  const [email, setEmail] = useState(UserData?.email);
  const [address, setAddress] = useState(UserData?.address);
  const [gender, setGender] = useState(UserData?.gender);
  const [activeTab, setActiveTab] = useState('overview');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const ProfileToggle = (e) => {
    setProfileModal(!profileModal);
  };

  const nameChange = (e) => {
    // setUserData({ ...UserData, name: e.target.value });
    setName(e ? e.target.value : "");
  };

  const onNameSubmit = async (e) => {
    e.preventDefault();
    setProfileModal(!profileModal);
    setUserData({ ...UserData, name: name });
  };

  const onDetailSave = async (e) => {
    e.preventDefault();
    setAddressModal(!addressModal);
    setUserData({ ...UserData, email: email, address: address });
  };

  console.log("🚀 ~ file: index.js:36 ~ UserData:", name);
  return (
    <React.Fragment>
      {/* Navigation bar */}
      <Navbar className="hero-navbar" expand={"lg"}>
        <NavbarBrand href="/">
          <span className="hero-logo">
            <img
              alt="logo"
              src={Logo}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </span>
          <span className="hero-text strong">My Account</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />

        <Collapse isOpen={collapsed} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem className="hero-nav-item">
              <NavLink className="nav-link" href="/Gradings">
                Gradings
              </NavLink>
            </NavItem>{" "}
            <NavItem className="hero-nav-item">
              <NavLink className="nav-link" href="/Classes">
                Classes
              </NavLink>
            </NavItem>
            <NavItem className="hero-nav-item">
              <NavLink className="nav-link" href="/Students">
                Students
              </NavLink>
            </NavItem>
            <NavItem className="hero-nav-item">
              <NavLink className="nav-link" href="/Suppliers">
                Suppliers
              </NavLink>
            </NavItem>{" "}
            <NavItem className="hero-nav-item">
              <NavLink className="nav-link" href="/Finances">
                Finances
              </NavLink>
            </NavItem>
            <NavItem className="hero-nav-item">
              <Link className="nav-link" href="/Reports">
                Reports
              </Link>
            </NavItem>
          </Nav>
          <div className="d-flex align-items-center">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-circle ml-3"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </Collapse>
      </Navbar>
      {/* User Mgmt */}
      <Container className="mt-5">
        {/* User Tab Section */}
        <Row>
          <Col lg="12" className="mb-4">
            <Nav className="user-pill">
            <NavItem active={activeTab === 'overview'}>
                <NavLink onClick={() => toggle('overview')}>Overview</NavLink>
              </NavItem>
              <NavItem active={activeTab === 'user-management'}>
                <NavLink onClick={() => toggle('user-management')}>
                  User Management
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
        </Row>
        {activeTab === 'overview' && (
          <Row className="mt-3">
            <Row className="mt-3">
          <Col lg="6" sm="12">
            {/* User Profile Section */}
            <Row>
              <Col lg="12">
                <Card className="border-0">
                  <CardBody className="d-flex flex-row  align-items-center">
                    <Media left className="mr-3">
                      <Media
                        object
                        src={Dummy}
                        alt="Profile"
                        className="rounded-circle user-profile"
                        style={{ width: "64px", height: "64px" }}
                      />
                    </Media>

                    <div>
                      <CardTitle tag="h5">{UserData.name}</CardTitle>
                      <p className="text-muted text-email">{UserData.email}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" className="mt-4">
                <Card className="border-0">
                  <CardHeader className="header-profile">
                    <Row>
                      <Col sm="9">
                        <CardTitle tag="h6">Personal Details</CardTitle>
                        <CardText className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </CardText>
                      </Col>
                      <Col sm="3" className="d-flex justify-content-end">
                        <p className="profile-Edit" onClick={ProfileToggle}>
                          Edit
                        </p>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody className="profile-card ">
                    <Row style={{ height: 250 }}>
                      <Col sm="4">
                        <p>
                          <strong>Name</strong>
                        </p>
                      </Col>
                      <Col sm="8">
                        <p>{UserData.name}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Button
                          block
                          className="btn-dotted"
                          onClick={GenderToggle}
                        >
                          <i className="fa-regular fa-plus"></i> Add Gender
                        </Button>
                      </Col>
                      <Col sm="12" className="my-3">
                        <Button
                          block
                          className="btn-dotted"
                          onClick={birthToggle}
                        >
                          {" "}
                          <i className="fa-regular fa-plus"></i> Add Date of
                          Birth
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="6" sm="12">
            <Card className="border-0">
              <CardHeader className="header-profile">
                <Row>
                  <Col sm="9">
                    <CardTitle tag="h6"> Address & Contact</CardTitle>
                    <CardText className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardText>
                  </Col>
                  <Col sm="3" className="d-flex justify-content-end">
                    <p className="profile-Edit" onClick={addressToggle}>
                      Edit
                    </p>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="profile-card ">
                <Row>
                  <Col sm="4">
                    <p>
                      <strong>Address</strong>
                    </p>
                  </Col>
                  <Col sm="8">
                    <p>{UserData.address}</p>
                  </Col>
                  <Col sm="4">
                    <p>
                      <strong>Email</strong>
                    </p>
                  </Col>
                  <Col sm="8">
                    <p> {UserData.email}</p>
                  </Col>
                  <Col sm="12" style={{ height: 350 }}></Col>
                </Row>
                <Row>
                  <Col sm="12">
                    <Button block className="btn-dotted" onClick={phoneToggle}>
                      <i className="fa-regular fa-plus"></i> Add Phone Number
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
          </Row>
        )}

        {activeTab === 'user-management' && (
          <Row className="mt-3">
            <Col lg="12" sm="12">
              <UserList />
            </Col>
          </Row>
        )}
     
      </Container>

      {/* Profile Modal */}
      <Modal isOpen={profileModal} toggle={ProfileToggle}>
        <ModalHeader toggle={ProfileToggle}>Profile</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name={name}
                value={name}
                onChange={(e) => nameChange(e)}
                placeholder="Enter Name"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-dotted"
            type="submit"
            onClick={(e) => onNameSubmit(e)}
          >
            Submit
          </Button>{" "}
          <Button color="warning" onClick={ProfileToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Gender */}
      <Modal isOpen={genderModal} toggle={GenderToggle}>
        <ModalHeader toggle={GenderToggle}>Gender</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="gender">Gender</Label>
              <Input id="gender" name="select" type="select">
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-dotted" onClick={GenderToggle}>
            Submit
          </Button>{" "}
          <Button color="warning" onClick={GenderToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Birth Date Modal */}
      <Modal isOpen={birthModal} toggle={birthToggle}>
        <ModalHeader toggle={birthToggle}>Date of Birth</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Date of Birth</Label>
              {/* <Input id="name" name="name" placeholder="Name" type="date  " /> */}
              <DatePicker
                className="date-style"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="MM/DD/YYYY"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-dotted" onClick={birthToggle}>
            Submit
          </Button>{" "}
          <Button color="warning" onClick={birthToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Address Modal */}
      <Modal isOpen={addressModal} toggle={addressToggle}>
        <ModalHeader toggle={addressToggle}>Address & Contact</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="textarea"
                placeholder="Enter Address"
                name={address}
                value={address}
                onChange={(e) => setAddress(e ? e.target.value : "")}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name={email}
                value={email}
                onChange={(e) => setEmail(e ? e.target.value : "")}
                placeholder="Enter Email"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-dotted"
            type="submit"
            onClick={(e) => onDetailSave(e)}
          >
            Submit
          </Button>{" "}
          <Button color="warning" onClick={addressToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Phone Modal */}
      <Modal isOpen={phoneModal} toggle={phoneToggle}>
        <ModalHeader toggle={phoneToggle}>Phone Number</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone Number"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-dotted" onClick={phoneToggle}>
            Submit
          </Button>{" "}
          <Button color="warning" onClick={phoneToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
    // User Profile Section
  );
};

export default UserAccount;
