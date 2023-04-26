
const InternalLink = ({ content, onLinkClick }) => {

    const handleClick = () => {
        onLinkClick();
    }

    return (
        <a onClick={handleClick}>
            { content }
        </a>
    );
};

export default InternalLink;
