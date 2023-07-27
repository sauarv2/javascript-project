const eventKeysEL = document.getElementById("eventKeys");

window.addEventListener("keydown", (event) => {
  eventKeysEL.innerHTML = `
    <div class="key">
        ${event.key === " " ? "space" : event.key}
        <small>event.Key</small>
      </div>

      <div class="key">
    ${event.keyCode}
        <small>event.Keycode</small>
      </div>

      <div class="key">
      ${event.code}
        <small>event.code</small>
      </div>

   `;
});
