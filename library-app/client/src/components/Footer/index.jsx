import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="">
      <div className="">
        {location.pathname !== '/' && (
          <button
            className=""
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - C.L.E.O</h4>
      </div>
    </footer>
  );
};

export default Footer;