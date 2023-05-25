import './styles.scss';

const Bar = ({ percent }) => {

    
    return (
        <div className="progress-bar">
            <div className="progress-bar__filler" style={{ width: percent }} >
            </div>
        </div>
     
    );
}

export default Bar;