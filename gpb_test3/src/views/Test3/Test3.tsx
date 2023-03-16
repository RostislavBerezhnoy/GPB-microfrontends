import { Link, useLocation } from "react-router-dom";

export const Test3 = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h4>Test3</h4>
      {pathname !== "/" && (
        <Link to="/">
          Back to container
        </Link>
      )}
    </div>
  );
};