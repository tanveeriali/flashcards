import React from "react";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSetsDefault: [],
      isSignedIn: false,
    };
  }

  render() {
    const Action = () => {
      if (this.props.action === "create") {
        return <Link to={`/new`}>Create a set +</Link>;
      }
      if (this.props.action === "cancel") {
        return <Link to={`/home`}>Main Menu </Link>;
      }
      if (this.props.user === true && this.props.action === "start") {
        return (
          <Link to={`/set/yours/${this.props.entryId}/`}>Test these cards</Link>
        );
      }
    };

    return (
      <div id="top">
        <div className="return">
          <Link to={`/flashcards/home`}>
            <FontAwesomeIcon icon={faBrain} size="lg" color="#ffffff" />
          </Link>
        </div>
        <div>{this.props.title}</div>
        <div className="action">
          <Action />
        </div>
      </div>
    );
  }
}
