import './styles.scss';

const Bar = ({ setShowLogo, animation, percent }) => {
     
    //console.log(setShowLogo)
      
    return (
    
        <div onAnimationEnd={() => setShowLogo(true)} id="progress-bar" className='progress-bar' style={{
            //display: props.showElement ? "block" : "none",
            animation: animation,
          }}>
          <div
            className="progress-bar__filler"
            style={{ width: percent}}
          ></div>
        </div>
     
    );
}

export default Bar;