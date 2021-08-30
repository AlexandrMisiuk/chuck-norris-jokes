import AsideComponent from "./components/AsideComponent/AsideComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
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
