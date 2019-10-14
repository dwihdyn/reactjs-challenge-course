import React from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

class UserImages extends React.Component {
  state = {
    images: []
  };
  // load the selected user profile pic using API
  componentDidMount() {
    // console.log(this.props);
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${this.props.userId}`
      )
      .then(resultFromLink => {
        this.setState({
          images: resultFromLink.data
        });
        console.log(resultFromLink.data);
      });
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <div className="d-flex flex-wrap" style={{ height: "100%" }}>
          {images.map((everyImage, index) => {
            return (
              <div style={{ width: "25%", height: "50%" }}>
                <Image
                  className="h-100 w-100"
                  key={index}
                  src={everyImage}
                  fluid
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UserImages;
