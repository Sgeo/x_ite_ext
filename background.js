browser.webRequest.onHeadersReceived.addListener(
    function(details) {
        for(header of details.responseHeaders) {
            if(header.name.toLowerCase() === "content-type" && (header.value === "model/vrml" || header.value === "x-world/x-vrml")) {
                
                let completedCallback = function(completedDetails) {
                                        
                    if(completedDetails.requestId !== details.requestId) {
                        return;
                    }
                                        
                    browser.webRequest.onCompleted.removeListener(completedCallback);
                    
                    browser.tabs.executeScript(details.tabId, {
                        "frameId": details.frameId,
                        "file": "/browser-polyfill.js"
                    });
                    let promise = browser.tabs.executeScript(details.tabId, {
                        "frameId": details.frameId,
                        "file": "/content.js"
                    });
                    
                };
                
                
                
                browser.webRequest.onCompleted.addListener(completedCallback, {"urls": ["<all_urls>"], "tabId": details.tabId});
                

                header.value = "text/plain";
                details.responseHeaders.push({name: "X-Content-Type-Options", value: "nosniff"});
                return { responseHeaders: details.responseHeaders };
            }
        }
    },
    {"urls": ["<all_urls>"], "types": ["main_frame", "sub_frame"]}
    ,
    ["blocking", "responseHeaders", "extraHeaders"]
);