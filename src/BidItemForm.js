import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuAppBar from "./MenuAppBar";
import createData from "./createData";
import { Link } from "react-router-dom";

class BidItemForm extends React.Component {
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
              // onsubmit="return validateForm()"
              // method="POST"
            >
              <label className="bid-form-label">Item Name</label>
              <input
                className="bid-form-input"
                name="item-name"
                type="text"
                id="itemTitle"
                placeholder="Item Name"
                required
              />
              <label className="bid-form-label">Item Description</label>
              <input
                className="bid-form-input"
                name="item-desc"
                type="textarea"
                id="itemDescription"
                placeholder="Describe the item"
                required
              />
              <label className="bid-form-label">Starting Bid</label>
              <input
                className="bid-form-input"
                type="text"
                id="startBid"
                placeholder="Starting bid"
                required
              />
              <label className="bid-form-label">Image Link</label>
              <input
                className="bid-form-input"
                id="imageURL"
                type="text"
                placeholder="URL"
                required
              />
              {/* <Link to="/biditems"> */}
              <button
                type="submit"
                className="submit-button"
                onClick={() => {
                  let itemTitle = document.getElementById("itemTitle").value;
                  let itemDescription = document.getElementById(
                    "itemDescription"
                  ).value;
                  let startBid = document.getElementById("startBid").value;
                  let imageURL = document.getElementById("imageURL").value;
                  return createData.bidItem({
                    itemTitle,
                    itemDescription,
                    startBid,
                    imageURL
                  });
                }}
              >
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
