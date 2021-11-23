import classes from './chat.module.scss';
const Chat = ({ data, handleClick }) => {
  return (
    <div className={classes.people} key={data.id} onClick={() => handleClick(data.id)}>
      <img src={`/profile-pictures/${data.img}`} alt='chat-image' />
      <div className={classes.content}>
        <p className={classes.chatname}>
          {data.name}
        </p>
        <p className={classes.lastmessage}>
          {data.messages[data.messages.length - 1].message}
        </p>
      </div>
    </div>
  )
}

export default Chat;
