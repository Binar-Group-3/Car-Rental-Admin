import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="copy-container center-xy">
        <h1>404, page not found.</h1>
        <Link to="/dashboard">
          <button type="button" class="btn btn-primary my-2">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
