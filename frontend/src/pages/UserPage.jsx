import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost likes={1200} replies={401} postImg={"./post1.png"} postTitle={"Lets traalk about frien fuse"}/>
      <UserPost likes={1200} replies={401} postImg={"./post1.png"} postTitle={"Lets traalk about frien fuse"}/>
      <UserPost likes={1200} replies={401} postImg={"./post1.png"} postTitle={"Lets traalk about frien fuse"}/>
      <UserPost likes={1200} replies={401} postImg={"./post1.png"} postTitle={"Lets traalk about frien fuse"}/>
      <UserPost likes={1200} replies={401} postImg={"./post1.png"} postTitle={"Lets traalk about frien fuse"}/>
    </>
  )
}

export default UserPage