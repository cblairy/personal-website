const internalLink = ({ link, content }) => {

    return (
        <a href={link}>
            { content }
        </a>
    );
};

export default internalLink;
