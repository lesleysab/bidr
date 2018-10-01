import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuAppBar from "./MenuAppBar";
import createData from "./createData";
import { Link } from "react-router-dom";

class BidItemForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     displayBidItems: false
  //   };
  // }
  // submitNewBidItem(bidForm) {
  //   fetch("/biditems", {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ bidForm })
  //   })
  //     .then(res => res.json())
  //     .then(results => results)
  //     .catch(err => {
  //       console.log("error", err);
  //     });
  // }

  // handleSubmitNewBidItem = () => {
  //   const newBidItem = {
  //     itemTitle: this.state.itemTitle,
  //     itemDescription: this.state.itemDescription,
  //     startBid: this.state.startBid,
  //     image: this.state.image
  //   };

  //   const bidItems = this.state.posts.map(item => item);
  //   bidItems.push(newBidItem);
  //   this.submitNewBidItem(bidItems);
  // };

  // displayBidItems = e => {
  //   this.setState({
  //     displayBidItems: this.state.displayBidItems
  //   });
  // };
  render() {
    return (
      <div>
        <MenuAppBar />
        <div className="bid-form-wrapper">
          <div className="bid-form">
            <div className="bid-form-header">
              <p>Enter New Bid Item</p>
              <hr />
            </div>
            <form className="bid-form-inputs" method="POST">
              <label className="bid-form-label">Item Name</label>
              <input
                className="bid-form-input"
                type="text"
                id="itemTitle"
                placeholder="Item Name"
              />
              <label className="bid-form-label">Item Description</label>
              <input
                className="bid-form-input"
                type="textarea"
                id="itemDescription"
                placeholder="Describe the item"
              />
              <label className="bid-form-label">Starting Bid</label>
              <input
                className="bid-form-input"
                type="text"
                id="startBid"
                placeholder="Starting bid"
              />
              <label className="bid-form-label">Image Link</label>
              <input
                className="bid-form-input"
                id="imageURL"
                type="text"
                placeholder="URL"
              />
              <Link to="/biditems">
                <button
                  className="submit-button"
                  onClick={() => {
                    let itemTitle = document.getElementById("itemTitle").value;
                    let itemDescription = document.getElementById(
                      "itemDescription"
                    ).value;
                    let startBid = document.getElementById("startBid").value;
                    let imageURL = document.getElementById("imageURL").value;
                    createData.bidItem({
                      itemTitle,
                      itemDescription,
                      startBid,
                      imageURL
                    });
                  }}
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default BidItemForm;
