import UserInfo from "./userInfo/UserInfo"
import ChatList from "./chatList/ChatList"

const List = () => {
    return (
      <div className="list flex-[1] flex flex-col">
        <UserInfo />
        <ChatList />
      </div>
    )
  }
  
  export default List
