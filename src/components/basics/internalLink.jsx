
const InternalLink = ({ content, onLinkClick, className }) => {

    const handleClick = () => {
        onLinkClick();
    }

    return (
        <a className={`internal-link ${className ? className : ""}`} onClick={handleClick}>
            { content }
        </a>
    );
};

export default InternalLink;
