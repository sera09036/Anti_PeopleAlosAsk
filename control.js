function del_element(){
    const element = document.getElementsByClassName("ULSxyf");
    for (let i of element) {
        if (i.textContent && i.textContent.includes("関連する質問")) {
            const el = i.getElementsByTagName("div")[0];
            el.style.display = "none";
            return;
        }
    }
    return;
}


const checkConfig = {
    async getToggleState() {
        const data = await chrome.storage.local.get("toggleState");
        return data.toggleState ?? false;
    }
}

async function initOnLoad() {
    const isChecked = await checkConfig.getToggleState();
    if(isChecked){
        del_element();
    };
}

initOnLoad();

chrome.runtime.onMessage.addListener((message) => {
    if (message === "delete") {
        del_element();
    } else if (message === "restore") {
        location.reload();
    }
});

