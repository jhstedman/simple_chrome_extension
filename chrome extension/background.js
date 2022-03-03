chrome.runtime.onInstalled.addListener( function( ) {
    chrome.contextMenus.create( {
        id: 'dataEntry',
        title: 'Insert data into field',
        contexts: [ 'all' ]
    } );
} );

chrome.contextMenus.onClicked.addListener( (info,tabs) => {
  console.log(info);
  chrome.tabs.sendMessage( tabs.id, info,
                           (rsp)=> {
                             console.log(rsp);
                           } );
} );
