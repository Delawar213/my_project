import styels from "./postUser.module.css"



const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) {
      throw new Error("plaease check your code something eroor")
  
    }
    return res.json();
  }

const PostUser = async ({userId}) => {
    const user = await getData(userId);
  return (
    <div className={styels.container}>
        <span className={styels.title}> Author </span>
        <span className={styels.username}> {user.username} </span>

    </div>
  )
}

export default PostUser