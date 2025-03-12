
const Footer = (props) => {
        const themeclass = props.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

    return (<>
        <footer className={"text-center mt-4 " + themeclass}>
            <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
        </footer>
    </>);
}
export default Footer;