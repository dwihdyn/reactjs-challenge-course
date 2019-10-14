import React from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

class UserProfilePage extends React.Component {
  state = {
    images: [],
    selectedUserName: ``
  };

  // load the selected user profile pic using API
  componentDidMount() {
    // console.log(this.props);
    const currentUser = this.props.match.params.id;
    const allUsers = this.props.childUsers;
    allUsers.forEach(oneUser => {
      console.log(oneUser);
      console.log(currentUser);
      if (oneUser.id === parseInt(currentUser)) {
        this.setState({
          selectedUserName: oneUser.username
        });
      }
    });
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${currentUser}`)
      .then(resultFromLink => {
        this.setState({
          images: resultFromLink.data
        });
        // console.log(this.state);
      });
  }

  render() {
    const { images, selectedUserName } = this.state;

    return (
      <>
        {/* {childUsers.map(user => {
          return <h4>{user.username}</h4>;
        })} */}

        <h2>user id number : {this.props.match.params.id}</h2>
        <h4>{selectedUserName} </h4>

        {/* since there are multiple images owned by every user, need to use .map */}
        <div className="d-flex flex-wrap w-25">
          {images.map((everyImage, index) => {
            return <Image key={index} src={everyImage} />;
          })}
        </div>
      </>
    );
  }
}

export default UserProfilePage;
