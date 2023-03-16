import { Link, useLocation } from "react-router-dom";

export const Test2 = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h4>Test2</h4>
      {pathname !== "/" && (
        <Link to="/">
          Back to container
        </Link>
      )}
    </div>
  );
};