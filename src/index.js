import "./styles.css";
import { dropDown } from "./dropdown.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  document.title = "Development";
}

