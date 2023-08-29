import { Coda } from 'coda-js'
import { getStoredToken } from './storage';
const base_url_api = "https://coda.io/apis/v1"
let codaApi;
const token = async () => {
  const tokenData = await getStoredToken()
  codaApi = new Coda(tokenData);
  return tokenData
};
token()

export const whoamai = async (): Promise<any> => {
  const whoamai = await codaApi.whoAmI();
  return whoamai;
}

export const GetTableData = async (docId: string, useColumnNames: boolean, valueFormat: string): Promise<any> => {
  const docRes = await fetch(`${base_url_api}/docs?isOwner=false`);
  const DocsData = await docRes.json()
  const TablesRes = await fetch(`${base_url_api}/docs/${docId}/tables`);
  const TableData = await TablesRes.json()
  const RowRes = await fetch(`${base_url_api}/docs/${docId}/tables/grid-VAAAD2nWgS/rows?useColumnNames=${useColumnNames}&valueFormat=${valueFormat}`);
  const TableRowsData = await RowRes.json()
  return TableRowsData.items
}

export const GetRowData = async (docId: string, tableId: string): Promise<any> => {
  const RowRes = await fetch(`${base_url_api}/docs/${docId}/tables/${tableId}/rows?useColumnNames=true`);
  const RowData = await RowRes.json()
  return RowData.items
}


export const GetDocsData = async (): Promise<any> => {
  const docRes = await fetch(`${base_url_api}/docs?isOwner=false`);
  const DocsData = await docRes.json()
  return DocsData.items
}

export const GetCurrentTable = async (docId: string): Promise<any> => {
  const TablesRes = await fetch(`${base_url_api}/docs/${docId}/tables`);
  const TableData = await TablesRes.json()
  return TableData.items
}

export const GetColumns = async (docId: string, tableId: string): Promise<any> => {
  const ColumnsRes = await fetch(`${base_url_api}/docs/${docId}/tables/${tableId}/columns`);
  const ColumsData = await ColumnsRes.json()
  return ColumsData.items
}

export const GetCurrentRow = async (docId: string, tableId: string, rowId: string): Promise<any> => {
  const currentRow = await fetch(`${base_url_api}/docs/${docId}/tables/${tableId}/rows/${rowId}`);
  const rowData = await currentRow.json()
  return rowData
}
export const GetCurrentColumn = async (docId: string, tableId: string, rowId: string, columnName: string): Promise<any> => {
  const currentColumn = await fetch(`${base_url_api}/docs/${docId}/tables/${tableId}/rows/${rowId}/columns/${columnName}`);
  const ColumnData = await currentColumn.json()
  return ColumnData
}

export const PushButton = async (api_push: string) => {
  var PushesButton;
  PushesButton = await fetch(`${api_push}`, {
    method: 'POST'
  })
  const dataPush = await PushesButton.json()
  if (Object.keys(dataPush).includes('statusCode')) {
    PushesButton = await fetch(`${api_push}`, {
      method: 'POST'
    })
  } else {

    const pettrenUrl = /\/buttons\/[^/]+/
    const currentRowApi = api_push.replace(pettrenUrl, "")
    const CurrentRowChange = await fetch(`${currentRowApi}?useColumnNames=true`)
    const updatedRow = await CurrentRowChange.json()
    // console.log('===========updatedRow=========', updatedRow.values)
    return updatedRow
  }
}