import React, { useState } from "react";
import "../styles/apikey.scss";
import image from "../assets/key.png";
interface ApiKeyProps {}
import { useApiKeyStore } from "../store/keyStore";

const ApiKey: React.FC<ApiKeyProps> = () => {
  const [input, setInput] = useState<string>("");
  const {setApiKey ,key} = useApiKeyStore()

  return (
    <section className="api_key">
      <div className="center">
        <img src={image} alt="" />
        <h1>Save your API Key</h1>
        <div>
          <input
            type="text"
            placeholder="API Key"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => setApiKey(input)}>Save</button>
        </div>
      </div>
    </section>
  );
};

export default ApiKey;
