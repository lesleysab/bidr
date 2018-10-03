import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuAppBar from "./MenuAppBar";
import createData from "./createData";
import { Link } from "react-router-dom";

class BidItemForm extends React.Component {
  state = {
    itemTitle: "",
    itemDescription: "",
    startBid: "",
    imageURL: ""
  };

  handleInput = (e, inputType) => {
    const updateState = {};
    updateState[inputType] = e.target.value;
    this.setState(updateState);
  };

  clearForm = () => {
    this.setState({
      itemTitle: "",
      itemDescription: "",
      startBid: "",
      imageURL: ""
    });
  };

  createBidItem = e => {
    e.preventDefault();
    let itemTitle = this.state.itemTitle;
    let itemDescription = this.state.itemDescription;
    let startBid = this.state.startBid;
    let imageURL = this.state.imageURL;
    return createData
      .bidItem({
        itemTitle,
        itemDescription,
        startBid,
        imageURL
      })
      .then(() => this.clearForm());
  };

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
            <form
              name="my-form"
              className="bid-form-inputs"
              onSubmit={e => this.createBidItem(e)}
            >
              <label className="bid-form-label">Item Name</label>
              <input
                className="bid-form-input"
                name="item-name"
                type="text"
                id="itemTitle"
                placeholder="Item Name"
                required
                value={this.state.itemTitle}
                onChange={e => this.handleInput(e, "itemTitle")}
              />
              <label className="bid-form-label">Item Description</label>
              <input
                className="bid-form-input"
                name="item-desc"
                type="textarea"
                id="itemDescription"
                placeholder="Describe the item"
                required
                value={this.state.itemDescription}
                onChange={e => this.handleInput(e, "itemDescription")}
              />
              <label className="bid-form-label">Starting Bid</label>
              <input
                className="bid-form-input"
                type="text"
                id="startBid"
                placeholder="Starting bid"
                required
                value={this.state.startBid}
                onChange={e => this.handleInput(e, "startBid")}
              />
              <label className="bid-form-label">Image Link</label>
              <input
                className="bid-form-input"
                id="imageURL"
                type="text"
                placeholder="URL"
                required
                value={this.state.imageURL}
                onChange={e => this.handleInput(e, "imageURL")}
              />
              {/* <Link to="/biditems"> */}
              <button type="submit" className="submit-button">
                Submit
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default BidItemForm;
