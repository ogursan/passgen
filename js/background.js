function createMenu() {
    chrome.contextMenus.create({
        title: "��������� � passgen",
        contexts: [ "selection" ],
        onclick: function(info, tab) {
            var notification = webkitNotifications.createNotification(
                'i/48.png',
                '�����������',
                info.selectionText
            );
            notification.show();console.log(info);
        }
    });
}

//createMenu();