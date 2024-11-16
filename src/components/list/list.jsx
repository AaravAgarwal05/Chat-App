import UserInfo from "./userInfo/userInfo"
import ChatList from "./chatList/chatList"

const List = () => {
    return (
      <div className="list flex-[1] flex flex-col">
        <UserInfo />
        <ChatList />
      </div>
    )
  }
  
  export default List
