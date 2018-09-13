import React from "react";
import CardComponent from "./CardComponent";
import { withStyles } from "@material-ui/core/styles";



const styles = theme => ({
  card: {
    maxWidth: 400
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  chip: {
    color: "secondary",
    alignItem: "flex-start"
  }
});

class Cards2 extends React.Component {
  state = {
    posts: [{ id: 0, author: "Mr. Woof", time: "1:32:14 PM", bid: "500" }],
    postInput: "",
    nameInput: "",
    bidInput: "",
    bidError: "",
    currentBid: 0,
    expanded: false,
    items: []
  };

  getInitialBid = () => {
    this.setState({
      currentBid: this.state.posts[this.state.posts.length - 1].bid
    });
  };

  componentDidMount() {
    this.getInitialBid();

    fetch("/biditems")
      .then(res => res.json())
      .then(items => {
        this.setState({ items });
      });

  }


  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {this.state.items.map(biditem => (
          <CardComponent
            classes={classes}
            itemTitle={biditem.itemTitle}
            itemDescription={biditem.itemDescription}
            image={biditem.image}
            startBid={biditem.startBid}
            posts={biditem.log}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cards2);
