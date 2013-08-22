function createMenu() {
    chrome.contextMenus.create({
        title: "Отправить в passgen",
        contexts: [ "selection" ],
        onclick: function(info, tab) {
            var notification = webkitNotifications.createNotification(
                'i/48.png',
                'Скопировано',
                info.selectionText
            );
            notification.show();console.log(info);
        }
    });
}

//createMenu();