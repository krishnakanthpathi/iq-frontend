
const Footer = (props) => {

    return (<>
        <footer className="text-center mt-4 "  data-bs-theme={props.theme}>
            <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
        </footer>
    </>);
}
export default Footer;