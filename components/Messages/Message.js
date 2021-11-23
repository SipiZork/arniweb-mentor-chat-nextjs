import classes from './message.module.scss';
const Message = ({ msg }) => {
  return (
    <div className={classes.msg}>
      {msg}
    </div>
  )
}

export default Message;
