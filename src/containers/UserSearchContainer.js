import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TagCloudDemo from "../components/TagInput";
import { getUsers, searchUsers } from "../actions/user.action";

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    searchUsers: user => {
      dispatch(searchUsers(user));
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state
  };
};

const UserSearchContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagCloudDemo)
);
export default UserSearchContainer;
