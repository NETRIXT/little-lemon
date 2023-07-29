import { Link } from "react-router-dom";

function CallToAction(props) {
  return (
    <Link to={props.buttonUrl} role="button" className='yellow-cta' aria-label="On Click">
      {props.heading}
    </Link>
  );
}

export default CallToAction;