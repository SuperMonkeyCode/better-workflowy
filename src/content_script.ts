import setHotkey from "hotkeys-js";
import { defaultStorage, IStorage } from "./storage";
import { createObserver, highlight, renderTotalTime } from "./utils/time";

// By default hotkeys are not enabled for INPUT, SELECT, TEXTAREA elements.
setHotkey.filter = function (event) {
    return true;
};

chrome.storage.sync.get(defaultStorage, ({ hotkeys, calcTotalTime }: IStorage) => {
    // Start calculate total time
    if (calcTotalTime) {
        highlight();
        renderTotalTime();
        createObserver();
    }

    // Start hotkeys
    for (const hotkey of hotkeys) {
        setHotkey(`${hotkey.specialKey}+${hotkey.key}`, function (event, handler) {
            // Prevent the default refresh event under WINDOWS system
            event.preventDefault();

            if (hotkey.hash) {
                location.hash = "?q=" + hotkey.hash.split(" ").reduce((acc, val) => `${acc}#${val} `, "");
            } else {
                location.hash = "";
            }
        });
    }
});
