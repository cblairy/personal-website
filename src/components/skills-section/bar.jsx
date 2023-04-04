import './styles.scss';

const Bar = ({ setShowLogo, showSection, percent }) => {

    function handleShowLogo() {
        if(setShowLogo){
            setShowLogo(true);
        }
    }
    
    return (
        <div className={`progress-bar ${showSection ? "visible" : ""}`} onAnimationEnd={handleShowLogo}>
            <div className="progress-bar__filler" style={{ width: percent }} >
            </div>
        </div>
     
    );
}

export default Bar;