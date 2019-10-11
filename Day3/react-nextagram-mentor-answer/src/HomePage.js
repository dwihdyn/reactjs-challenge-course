class HomePage extends React.Component {
  render() {
    const { childUsers } = this.props;
    return (
      <>
        {childUsers.map((user, index) => (
          <Container key={index}>
            <Card>
              <Row>
                <Col>
                  <h4>{user.username}</h4>
                  <img src={user.profileImage} alt={user.username} />
                </Col>
                <Col>
                  <UserImages childId={user.id} />
                </Col>
              </Row>
            </Card>
          </Container>
        ))}
      </>
    );
  }
}
