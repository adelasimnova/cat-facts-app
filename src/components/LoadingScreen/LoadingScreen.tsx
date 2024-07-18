import "./LoadingScreen.css";
import "boxicons";

function LoadingScreen() {
  return (
    <div className="loader-wrapper">
      <box-icon name="loader" animation="spin" size="md" color="#ffb163" />
    </div>
  );
}

export default LoadingScreen;