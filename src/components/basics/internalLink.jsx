
const InternalLink = ({ content, onLinkClick, className, setIsActiveBurger }) => {

    const handleClick = () => {
        onLinkClick();

        if (window.innerWidth <= 450){
            setIsActiveBurger(false);
        }
    }

    return (
        <a className={`internal-link ${className ? className : ""}`} onClick={handleClick}>
            { content }
        </a>
    );
};

export default InternalLink;
