const switch_togle = document.getElementById("toggleSwitch");

async function sendToPage(status) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
        chrome.tabs.sendMessage(tab.id, status);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const isChecked = await ExtensionConfig.getToggleState();
    switch_togle.checked = isChecked; // 保存されている状態（true/false）
});


switch_togle.addEventListener("change", async () => {
    await ExtensionConfig.setToggleState(switch_togle.checked);

    if (switch_togle.checked) {
        sendToPage("delete");
    } else {
        sendToPage("restore");
    }
});