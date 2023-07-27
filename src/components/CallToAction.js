function CallToAction(props) {
    return (
        <button aria-label="On Click" className='yellow-cta'><a href={props.buttonUrl} role="button">{props.heading}</a></button>
    );
  }
  
  export default CallToAction;
  