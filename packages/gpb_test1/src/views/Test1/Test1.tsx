import { Link, useLocation } from "react-router-dom";
import { Box } from 'gpb_ui'

export const Test1 = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <h4>Test1</h4>
      {pathname !== "/" && (
        <Link to="/">
          Back to container
        </Link>
      )}
    </Box>
  );
};
