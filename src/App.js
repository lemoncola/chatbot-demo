import React, { useEffect } from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";

export default function App() {
  const { messages, appendMsg, setTyping } = useMessages([]);

  useEffect(
    () => {
      appendMsg({
        type: "text",
        content: {
          text: "Welcome! How may I help you?"
        }
      });
    },
    [] /* Run once */
  );

  function getAddress(lat, lng) {
    const latlng = { lat, lng };

    //console.log(window.geocoder);
    //console.log(window.google);

    window.geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          console.log(response.results[0].formatted_address);
          appendMsg({
            type: "text",
            content: {
              text: "Address:" + response.results[0].formatted_address
            }
          });
        } else {
          appendMsg({
            type: "text",
            content: {
              text: "No results found"
            }
          });
        }
      })
      .catch((e) => {
        //window.alert("Geocoder failed due to: " + e)
        appendMsg({
          type: "text",
          content: {
            text: "Geocoder failed due to: " + e
          }
        });
      });
  }

  function handleSend(type, val) {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          appendMsg({
            type: "text",
            content: {
              text:
                "lat: " +
                position.coords.latitude +
                ", long: " +
                position.coords.longitude
            }
          });
          getAddress(position.coords.latitude, position.coords.longitude);
        },
        (e) =>
          appendMsg({
            type: "text",
            content: { text: e.message }
          })
      );
    }

    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right"
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "Checking..." }
        });
      }, 10);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <Chat
      navbar={{ title: "JP8 Demo Chatbot" }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
}
