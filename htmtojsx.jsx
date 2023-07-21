import React, { useState } from "react";
import { parse } from "html-to-jsx"; // Importer la fonction de conversion

const HtmlToJsxConverter = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [jsxOutput, setJsxOutput] = useState("");

  // Gérer la saisie de code HTML
  const handleHtmlInputChange = (e) => {
    setHtmlInput(e.target.value);
  };

  // Convertir le HTML en JSX
  const convertToJsx = () => {
    try {
      // Utiliser la fonction parse() pour effectuer la conversion
      const jsxCode = parse(htmlInput);
      setJsxOutput(jsxCode);
    } catch (error) {
      setJsxOutput("Erreur de conversion !");
    }
  };

  return (
    <div>
      <h2>Convertir du HTML en JSX</h2>
      <div>
        <textarea
          rows={10}
          value={htmlInput}
          onChange={handleHtmlInputChange}
          placeholder="Saisissez votre code HTML ici"
        />
      </div>
      <div>
        <button onClick={convertToJsx}>Convertir en JSX</button>
      </div>
      <div>
        <h3>Code JSX résultant :</h3>
        <pre>{jsxOutput}</pre>
      </div>
    </div>
  );
};

export default HtmlToJsxConverter;
