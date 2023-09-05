import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#536589ff",
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) {
          return console.log(err);
        }
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <h1>QR Code Generator!</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="btn" onClick={GenerateQRCode}>
        Generate!
      </button>
      {qrcode && (
        <div className="qr-container">
          <img src={qrcode} alt="qr-pic" />
          <a className="download" download="qrcode.png" href={qrcode}>
            Download QR
          </a>
        </div>
      )}
      <footer>Made by Baik Kai Shan © 2023</footer>
    </div>
  );
}

export default App;
