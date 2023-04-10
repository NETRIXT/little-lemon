function CallToAction(props) {
    return (
        <button className='yellow-cta'><a href={props.buttonUrl} role="button">{props.heading}</a></button>
    );
  }
  
  export default CallToAction;
  