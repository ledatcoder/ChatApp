import React, { useEffect } from "react";
import ViewTitle from "../components/shared/ViewTitle";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import { withBaseLayout } from "../layouts/Base";
import { fetchChats } from "../actions/chats";
import Notification from "../utils/notifications";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  // const chats = useSelector(({chats}) => chats.items)
  const joinedChats = useSelector(({chats}) => chats.joined)
  const availableChats = useSelector(({chats}) => chats.available)
  useEffect(() => {
    Notification.setup();
    dispatch(fetchChats());
  }, [dispatch]);
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
      <JoinedChatsList chats={joinedChats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose your channel">
          <Link className="btn btn-outline-primary" to="/chatCreate">
            New
          </Link>
        </ViewTitle>
        <AvailableChatsList chats={availableChats} />
      </div>
    </div>
  );
}
export default withBaseLayout(Home);
