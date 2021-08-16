const LinkButton = ({ LinkButtonContent }) => {
    return (
        <a className="LinkButton" href={LinkButtonContent.link} rel='noreferrer' target="_blank">{LinkButtonContent.title}</a>

    );
}

export default LinkButton;