
import { FaPen,FaTimes } from "react-icons/fa";

import { FaRegCircle } from "react-icons/fa6";

function Icon({ name }) {
  if (name == "circle") {
    return <FaRegCircle />;
  } else if (name == "cross") {
    return <FaTimes />;
  } else {
    return <FaPen />;
  }
}
export default Icon;
