import React from "react";
import JSONPretty from "react-json-pretty";
import { Container, TextArea } from "semantic-ui-react";

const Test = () => {
  return (
    <>
      <Container>
        <h2>WITHOUT STYLE</h2>
        <JSONPretty data={{
  policies: {
    ExtensionSettings: {
      "*": {
        blocked_install_message: "Custom error message.",
        install_sources: ["about:addons", "https://addons.mozilla.org/"],
        installation_mode: "allowed",
        allowed_types: ["extension"]
      },
      "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
        installation_mode: "force_installed",
        install_url:
          "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
      }
    }
  }
}} />
      </Container>
    </>
  );
};
const json = {
  policies: {
    ExtensionSettings: {
      "*": {
        blocked_install_message: "Custom error message.",
        install_sources: ["about:addons", "https://addons.mozilla.org/"],
        installation_mode: "allowed",
        allowed_types: ["extension"]
      },
      "{d634138d-c276-4fc8-924b-40a0ea21d284}": {
        installation_mode: "force_installed",
        install_url:
          "https://addons.cdn.mozilla.net/user-media/addons/950528/1password_password_manager-1.23.1-fx.xpi?filehash=sha256%3A47e9e98f1072d93d595002dc8c221e5cca17e091b3431563a8e3e2be575c5cc1"
      }
    }
  }
};

export default Test;