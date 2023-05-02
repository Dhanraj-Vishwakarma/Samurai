import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Input,
  CardTitle,
  CardText,
  Spinner,
  Container,
} from "reactstrap";
import AllUserList from "../../../Data/userList.json";
const UserList = () => {
  return (
    <div>
      <Container className="mb-5">
        {/* User Tab Section */}

        <Row className="mb-3">
          <Row className="mb-3">
            <Col sm="12">
              {/* User Profile Section */}
              <Row>
                <Col lg="12" className="mt-4">
                  <Card className="border-0">
                    <CardHeader className="header-profile">
                      <Row>
                        <Col sm="9">
                          <CardTitle tag="h6" ><b>All Users</b></CardTitle>
                        </Col>
                        <Col sm="3" className="d-flex justify-content-end">
                          <Button color="primary">Add User</Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody className="px-0 ">
                      <Row style={{ height: 250 }}>
                        <Col sm="12">
                          <Table
                            responsive
                            striped
                            className="mt-2 customDataTable"
                          >
                            <thead style={{ backgroundColor: "#8080806e" }}>
                              <tr>
                                <th></th>
                                <th>Date Created</th>
                                <th>Full Name</th>
                                <th>User Type</th>
                                <th>Contact No.</th>
                                <th>Email Address</th>
                                {/* <th></th> */}
                              </tr>
                            </thead>

                            <tbody>
                              {AllUserList.map((use, i) => {
                                return (
                                  <tr key={i}>
                                    <td>
                                      {/* <i className="fas fa-solid fa-grip-lines"></i> */}
                                    </td>
                                    <td>{use.createdAt}</td>
                                    <td style={{ color: "#b2214e" }}>
                                      {" "}
                                      {use.name}
                                    </td>
                                    <td> {use.user_type}</td>
                                    <td> {use.contact}</td>
                                    <td> {use.email}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default UserList;
