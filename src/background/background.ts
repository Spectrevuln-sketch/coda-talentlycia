import { setStoredToken } from "../utils/storage";

// const PushButton = async (api_push: string) => {
//   var PushesButton;
//   PushesButton = await fetch(`${api_push}`, {
//     method: 'POST'
//   })
//   const dataPush = await PushesButton.json()
//   if (Object.keys(dataPush).includes('statusCode')) {
//     PushesButton = await fetch(`${api_push}`, {
//       method: 'POST'
//     })
//   } else {

//     const pettrenUrl = /\/buttons\/[^/]+/
//     const currentRowApi = api_push.replace(pettrenUrl, "")
//     const CurrentRowChange = await fetch(`${currentRowApi}?useColumnNames=true`)
//     const updatedRow = await CurrentRowChange.json()
//     return updatedRow
//   }
// }

// chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
//   // console.log(msg);
//   // console.log(sender);
//   // sendResponse("From The Background")
//   if (msg.name === "push_button") {
//     var updatedButton;
//     var checkerRow;
//     await PushButton(msg.api_push)
//     checkerRow = msg.res.map(row => JSON.stringify(row.values) === JSON.stringify(msg.updatedButton.values))
//     while (checkerRow.includes(true)) {
//       updatedButton = await PushButton(msg.api_push)
//       checkerRow = msg.res.map(row => JSON.stringify(row.values) === JSON.stringify(msg.updatedButton.values))
//     }
//     console.log('checkerRow', checkerRow)
//     sendResponse(true)
//   }

// })
chrome.runtime.onInstalled.addListener(() => {
  setStoredToken('')
})