import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="container "  data-bs-theme={props.theme} >
            <header className="jumbotron text-center">
                <h1>Welcome to the Learning Platform </h1>
                <p>Empowering students and teachers through interactive learning and doubt-solving.</p>
                <div>
                    <Link to="/login" className="btn btn-primary m-2">Login</Link>
                    <Link to="/register" className="btn btn-secondary m-2">Register</Link>
                </div>
            </header>

            <section className="row text-center">
                <div className="col-md-4">
                    <h2>💡 Solve Doubts</h2>
                    <p>Post and resolve doubts quickly with expert guidance from teachers.</p>
                </div>
                <div className="col-md-4">
                    <h2>📝 Practice Problems</h2>
                    <p>Challenge yourself with curated problems and improve problem-solving skills.</p>
                </div>
                <div className="col-md-4">
                    <h2>🔑 Teacher Admin Access</h2>
                    <p>Teachers can manage content, assign tasks, and guide students efficiently.</p>
                </div>
            </section>


        </div>
    );
};

export default Home;