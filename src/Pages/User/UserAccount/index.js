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
import moment from "moment";

const UserAccount = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [birthModal, setBirthModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  const toggleNavbar = () => setCollapsed(!collapsed);
  const GenderToggle = () => {
    setGenderModal(!genderModal);
    setGender("");
  };
  const birthToggle = () => setBirthModal(!birthModal);
  const addressToggle = () => setAddressModal(!addressModal);
  const phoneToggle = () => setPhoneModal(!phoneModal);

  const [UserData, setUserData] = useState({
    name: "Dave Allen",
    gender: "",
    address: "18 Address Place, St Brelade, Jersey JE3 8JU",
    email: "daveallen@samuraikickboxing.com",
    dob: "",
    phone: "",
  });
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState(UserData?.name);
  const [email, setEmail] = useState(UserData?.email);
  const [address, setAddress] = useState(UserData?.address);
  const [gender, setGender] = useState(UserData?.gender);
  const [phoneNumber, setPhoneNumber] = useState(UserData?.phone);
  const [activeTab, setActiveTab] = useState("overview");

  let convertDate = moment(startDate).format("L");
  // console.log("convertDate:", convertDate)
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const ProfileToggle = (e) => {
    setProfileModal(!profileModal);
  };

  const onNameSave = async (e) => {
    e.preventDefault();
    setProfileModal(!profileModal);
    setUserData({ ...UserData, name: name });
  };

  const onDetailSave = async (e) => {
    e.preventDefault();
    setAddressModal(!addressModal);
    setUserData({ ...UserData, email: email, address: address });
  };

  const onGenderSave = async (e) => {
    e.preventDefault();
    setGenderModal(!genderModal);
    setUserData({ ...UserData, gender: gender });
  };
  const onDobSave = async (e) => {
    e.preventDefault();
    setBirthModal(!birthModal);
    setUserData({ ...UserData, dob: convertDate });
  };
  const onPhoneSave = async (e) => {
    e.preventDefault();
    setPhoneModal(!phoneModal);
    setUserData({ ...UserData, phone: phoneNumber });
  };
  // console.log("🚀  startDate:", startDate);
  return (
    <React.Fragment>
      <div className="mb-4">
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
                <NavItem active={activeTab === "overview"}>
                  <NavLink onClick={() => toggle("overview")}>Overview</NavLink>
                </NavItem>
                <NavItem active={activeTab === "user-management"}>
                  <NavLink onClick={() => toggle("user-management")}>
                    User Management
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          {activeTab === "overview" && (
            // <Row >
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
                          <p className="text-muted text-email">
                            {UserData.email}
                          </p>
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
                        <Row>
                          <Col xs="6" sm="4">
                            <p>
                              <strong>Name</strong>
                            </p>
                          </Col>
                          <Col xs="6" sm="8">
                            <p>{UserData.name} </p>
                          </Col>
                          <Col xs="6" sm="4">
                            {gender !== "" ? (
                              <p>
                                <strong>Gender</strong>
                              </p>
                            ) : (
                              <p style={{ color: "#fff" }}>Gender</p>
                            )}
                          </Col>
                          <Col xs="6" sm="8">
                            {" "}
                            {gender !== "" ? <p>{UserData.gender}</p> : ""}
                          </Col>

                          <Col xs="6" sm="4">
                            {startDate !== "" ? (
                              <p>
                                <strong>Date Of Birth</strong>
                              </p>
                            ) : (
                              <p style={{ color: "#fff" }}>Date Of Birth</p>
                            )}
                          </Col>
                          <Col xs="6" sm="8">
                            {" "}
                            {startDate !== "" ? <p>{UserData.dob}</p> : ""}
                          </Col>
                          <Col
                            className="gap-height"
                            sm="12"
                            style={{ height: 80 }}
                          ></Col>
                        </Row>

                        <Row>
                          <Col sm="12">
                            <Button
                              block
                              className="btn-dotted"
                              onClick={GenderToggle}
                            >
                              {gender !== "" ? (
                                <>Update Gender</>
                              ) : (
                                <>
                                  {" "}
                                  <i className="fa-regular fa-plus"></i> Add
                                  Gender
                                </>
                              )}
                            </Button>
                          </Col>
                          <Col sm="12" className="mt-3">
                            <Button
                              block
                              className="btn-dotted"
                              onClick={birthToggle}
                            >
                              {" "}
                              {startDate !== "" ? (
                                <>Update Date of Birth</>
                              ) : (
                                <>
                                  <i className="fa-regular fa-plus"></i> Add
                                  Date of Birth
                                </>
                              )}
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" sm="12">
                <Card className="border-0 cardGap">
                  <CardHeader className="header-profile">
                    <Row>
                      <Col sm="9">
                        <CardTitle tag="h6"> Address & Contact</CardTitle>
                        <CardText className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
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
                      <Col xs="6" sm="4">
                        <p>
                          <strong>Address</strong>
                        </p>
                      </Col>
                      <Col xs="6" sm="8">
                        <p>{UserData.address}</p>
                      </Col>
                      <Col xs="6" sm="4">
                        <p>
                          <strong>Email</strong>
                        </p>
                      </Col>
                      <Col xs="6" sm="8">
                        <p> {UserData.email}</p>
                      </Col>{" "}
                      <Col xs="6" sm="4">
                        {phoneNumber !== "" ? (
                          <p>
                            <strong>Phone No.</strong>
                          </p>
                        ) : (
                          <p style={{ color: "#fff" }}>Phone No.</p>
                        )}
                      </Col>
                      <Col xs="6" sm="8">
                        {phoneNumber !== "" ? <p> {UserData.phone}</p> : ""}
                      </Col>
                      <Col sm="12" style={{ height: 305 }}></Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <Button
                          block
                          className="btn-dotted"
                          onClick={phoneToggle}
                        >
                          {phoneNumber !== "" ? (
                            <> Update Phone Number</>
                          ) : (
                            <>
                              <i className="fa-regular fa-plus"></i> Add Phone
                              Number
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            // {/* </Row> */}
          )}

          {activeTab === "user-management" && (
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
                  onChange={(e) => setName(e ? e.target.value : "")}
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
              onClick={(e) => onNameSave(e)}
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
                <Input
                  id="gender"
                  name={gender}
                  value={gender}
                  type="select"
                  onChange={(e) => setGender(e ? e.target.value : "")}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-dotted" onClick={(e) => onGenderSave(e)}>
              Update
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
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  placeholderText="MM/DD/YYYY"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-dotted" onClick={(e) => onDobSave(e)}>
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
                  name={phoneNumber}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e ? e.target.value : "")}
                  placeholder="Enter Phone Number"
                  type="text"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-dotted" onClick={(e) => onPhoneSave(e)}>
              Submit
            </Button>{" "}
            <Button color="warning" onClick={phoneToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </React.Fragment>
    // User Profile Section
  );
};

export default UserAccount;
