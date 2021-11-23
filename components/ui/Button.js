import classes from './button.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  )
}

export default Button;
