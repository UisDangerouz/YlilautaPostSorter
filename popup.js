let activateSortingBtn = $('#activateSortingBtn')

activateSortingBtn.click(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["jquery.min.js"]}, () => {
        chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["sorter.js"]});
    });
})

