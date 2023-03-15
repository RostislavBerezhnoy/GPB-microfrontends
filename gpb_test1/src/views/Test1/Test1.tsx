import { Link, useLocation } from "react-router-dom";

export const Test1 = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h4>Test1</h4>
      {pathname !== "/" && (
        <Link to="/">
          Back to container
        </Link>
      )}
    </div>
  );
};
