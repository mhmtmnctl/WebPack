import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello WebPack!");

  setItem("token", "sdfnsdfsdfsdfsf7776sdfsdf");
});
