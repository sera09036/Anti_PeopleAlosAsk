const ExtensionConfig = {
    // 設定を保存する関数 (引数には true または false)
    async setToggleState(isChecked) {
        return chrome.storage.local.set({ toggleState: isChecked });
    },

    // 設定を読み込む関数（データがなければ初期値として false を返す）
    async getToggleState() {
        const data = await chrome.storage.local.get("toggleState");
        return data.toggleState ?? false; // デフォルトはOFF(false)
    }
};
