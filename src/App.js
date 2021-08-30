import AsideComponent from "./components/AsideComponent";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import "./styles.scss";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <HeaderComponent />
        <MainComponent />
      </div>
      <AsideComponent />
    </div>
  );
}
