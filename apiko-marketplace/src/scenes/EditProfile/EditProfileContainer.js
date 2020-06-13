import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { viewerOperations } from "../../modules/viewer";
import EditProfileComponent from "./EditProfileComponent";

const mapStateToProps = (state) => ({
  viewer: state.viewer.user,
  avatarUrl: state.viewer.avatarUrl,
  isLoading: state.viewer.fetchViewer.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchUpdateUserAccount: viewerOperations.fetchUpdateUserAccount,
  fetchUploadImage: viewerOperations.fetchUploadImage,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    uploadImage: (props) => async (file) => {
      console.log(file);
      await props.fetchUploadImage(file);
    },
    handleEditProfile: (props) => async (user) => {
      console.log({ ...user, avatar: props.avatarUrl });
      await props.fetchUpdateUserAccount({ ...user, avatar: props.avatarUrl });
    },
  })
);

export default enhancer(EditProfileComponent);
