const toast = document.getElementById("toast");
const header = toast.querySelector(".toast-header");
const message = toast.querySelector(".toast-message");

let timeout;

export function notify(type, msg) {
  // apply new state
  toast.classList.remove("error", "success", "warning");
  toast.classList.add(type);

  header.textContent = type.toUpperCase();
  message.textContent = msg;

  // show toast
  toast.classList.add("active");

  // reset timer
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    toast.classList.remove("active", type);
  }, 3000);
}

//App loader
const loader = document.getElementById("loader");
export function showLoader() {
  loader.classList.remove("hidden");
}
export function hideLoader() {
  loader.classList.add("hidden");
}

const liveDataFlag = document.querySelector(".live-data-container");

export function showLiveDataFlag() {
  liveDataFlag.style.display = "flex";
}

export function hideLiveDataFlag() {
  liveDataFlag.style.display = "none";
}
