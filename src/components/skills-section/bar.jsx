import './styles.scss';

const Bar = ({ setShowLogo, animation, percent }) => {
    function handleShowLogo() {
        setShowLogo(true)
    }
    console.log(setShowLogo)
    return (
        <div onAnimationEnd={() => handleShowLogo} className='progress-bar' style={{ animation: animation }}>
            <div className="progress-bar__filler" style={{ width: percent }} >
            </div>
        </div>
     
    );
}

export default Bar;