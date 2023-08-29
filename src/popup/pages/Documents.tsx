import React, { useEffect, useState } from 'react'
import { GetColumns, GetCurrentRow, GetCurrentTable, GetDocsData, GetRowData, whoamai } from '../../utils/api'
import { getFormData, setCurrentTask, setFormData, setSelectTask } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

interface States {
  docs: string,
  table: string,
  row: string,
}


const Documents: React.FC<{}> = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<any>()
  const [docsData, setDocsData] = useState<any[]>([])
  const [tableData, setTableData] = useState<any[]>([])
  const [columnsData, setColumnsData] = useState<any[]>([])
  const [rowData, setRowData] = useState<any[]>([])
  const [stateData, setStateData] = useState<States>({
    docs: '',
    table: '',
    row: '',
  })

  useEffect(() => {
    GetAllData()

  }, [stateData])
  useEffect(() => {
    getFormData().then((docData) => {
      setStateData({
        docs: docData.docs,
        table: docData.table,
        row: docData.row,
      })
    })
  }, [])


  const GetAllData = async () => {
    const DataUser = await whoamai()
    setUserData(DataUser)
    const DocsData = await GetDocsData()
    setDocsData(DocsData)
    if (stateData.docs) {
      const tablesData = await GetCurrentTable(stateData.docs)
      setTableData(tablesData)
    }
    if (stateData.docs && stateData.table) {
      const columnsData = await GetColumns(stateData.docs, stateData.table)
      setColumnsData(columnsData)
    }
    if (stateData.docs && stateData.table) {
      const rowsData = await GetRowData(stateData.docs, stateData.table)
      setRowData(rowsData)
    }
  }

  const FindTask = async () => {
    setFormData(stateData)
    CurrentRow()
    navigate(`/time-sheet/${stateData.docs}/${stateData.table}/${stateData.row}`)
  }

  const CurrentRow = () => {
    GetCurrentRow(stateData.docs, stateData.table, stateData.row).then((currentRow) => {

      setSelectTask(currentRow?.name)
      setCurrentTask({
        id: currentRow.id,
        name: currentRow.name
      })
    })

  }


  return (
    <div className='w-full px-2 -mt-4'>
      <div className='flex flex-1 flex-row gap-2 px-2 mb-4'>
        <div className='rounded-full bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400' style={{
          padding: '2px'
        }}>
          <img src={userData?.pictureLink ?? ''} className='w-10 h-10 rounded-full' />
        </div>
        <div>
          <div className='flex flex-1 flex-col'>
            <p className='text-sm font-semibold'>{userData?.name}</p>
            <p className='text-xs font-light'>{userData?.loginId}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-row items-center justify-between p-2'>
        <div>
          <p className='text-sm font-semibold'>Record Task</p>
        </div>
        {/* <IconContext.Provider value={{ size: '20px', className: "text-gray-400" }}>
          <div>
            <PiQuestion />
          </div>
        </IconContext.Provider> */}
      </div>
      <div className='flex flex-1 flex-col gap-2 px-2 pt-2 pb-4'>
        <div className='mb-2'>
          <label className="block text-gray-700 text-xs font-light mb-2  uppercase" >
            Select Document
          </label>
          <select defaultValue={stateData.docs} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setStateData({
            ...stateData,
            docs: e.target.value
          })}>
            <option value={stateData.docs ?? ''}>{stateData.docs ? docsData.find((value, idx) => stateData.docs === value.id)?.name : 'Select Document'}</option>
            {docsData && docsData.map((data, idx) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
        </div>
        <div className='mb-2'>
          <label className="block text-gray-700 text-xs font-light mb-2  uppercase" >
            Select Table
          </label>
          <select defaultValue={stateData.table} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setStateData({
            ...stateData,
            table: e.target.value
          })}>
            <option value={stateData.table ?? ''}>{stateData.table ? tableData.find((value, idx) => stateData.table === value.id)?.name : 'Select Table'}</option>
            {tableData && tableData.map((data, idx) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
        </div>
        <div className='mb-2'>
          <label className="block text-gray-700 text-xs font-light mb-2  uppercase" >
            Select Task
          </label>
          <select defaultValue={stateData.row} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setStateData({
            ...stateData,
            row: e.target.value
          })}>
            <option value={stateData.row ?? ''}>{stateData.row ? rowData.find((value, idx) => stateData.row === value.id)?.name : 'Select Task'}</option>
            {rowData && rowData.map((data, idx) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
        </div>
        {Object.values(stateData).includes('') ? (
          <div className="flex flex-1 flex-row justify-end items-center mb-2">
            <button type='button' className='p-2 text-gray-400 rounded-full bg-gray-300' disabled={true}>Find Task</button>
          </div>
        ) : (
          <div className="flex flex-1 flex-row justify-end items-center mb-2">
            <button type='button' className='p-2 text-white rounded-full bg-blue-400' onClick={FindTask}>Find Task</button>
          </div>
        )}
      </div>


    </div>
  )
}

export default Documents