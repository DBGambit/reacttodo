import add from "../Button-icons/add.svg";
import edit from "../Button-icons/edit.svg";
import deleteBtn from "../Button-icons/delete.svg";

function Icon({ type }) {
  switch (type) {
    case "Edit":
      return <img width="100" height="30" src={edit} />;
    case "Delete":
      return <img width="100" height="30" src={deleteBtn} />;
    case "Add":
      return <img width="100" height="30" src={add} />;
    default:
      return "";
  }
}

export default Icon;
