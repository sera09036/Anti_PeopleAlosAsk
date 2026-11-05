const ExtensionConfig = {
    async setToggleState(isChecked) {
        return chrome.storage.local.set({ toggleState: isChecked });
    },

    // データがなければ初期値として false を返す
    async getToggleState() {
        const data = await chrome.storage.local.get("toggleState");
        return data.toggleState ?? false; // デフォルトはOFF(false)
    }
};
