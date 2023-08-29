import React, { useEffect, useState } from 'react'
import { GetCurrentColumn, GetCurrentRow, GetTableData, PushButton } from '../../utils/api'
import DataTable from 'react-data-table-component'
import { useNavigate, useParams } from 'react-router-dom'
import { getSelectTask } from '../../utils/storage'
import Lottie from "lottie-react"
import spinnerLoading from "../../static/animation_llw4644e.json"
interface ValueTaskType {
  Category: string,
  "Clock in": string,
  "Clock out": string,
  "Current entry": string,
  "Current duration": string,
  "Total today": string,
  Tracking?: string,
  Task: string
}

interface TaskType {
  id: string,
  data: string,
}

interface CurrentTaskType {
  id: string,
  name: string,
}

const TimeSheet: React.FC<{}> = () => {

  const { docId, tableId, rowId } = useParams()
  const [ListTimeTracker, setListTimeTracker] = useState<any[]>([])
  // const [ListRow, setListRow] = useState<any[]>([])
  const [selectTask, setSelectTask] = useState<string>('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    setListTimeTracker([])
    setLoading(true)
    getTableData();
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  useEffect(() => {
    CurrentRow()
  }, [ListTimeTracker])

  const CurrentRow = () => {
    GetCurrentRow(docId, tableId, rowId).then(async (currentRow) => {
      const selectedTask = await getSelectTask()
      setSelectTask(currentRow?.name || selectedTask)
    })

  }


  const getTableData = async () => {
    setListTimeTracker([])
    const res = await GetTableData(docId, true, "simple")
    const ListValue = res.map(data => Object.assign({}, {
      id: data.id,
      ...data.values
    }))

    await UpdateValueButton(ListValue)
    // setListRow(res)
    setListTimeTracker(ListValue)
  }

  const UpdateValueButton = async (ListValue) => {
    const getColumnId = await GetTableData(docId, false, "simpleWithArrays")
    getColumnId.map((data, idx) => {
      // console.log('ListValue["Clock in"]', ListValue[idx]["Clock in"])
      for (const key in data.values) {
        if (data.values.hasOwnProperty(key) && data.values[key] === ListValue[idx]["Clock in"]) {
          ListValue[idx]["Clock in"] = {
            api_push: `${data.href}/buttons/${key}`,
            row_id: data.id,
            column_id: key,
            columnName: 'Clock in',
            data: ListValue[idx]["Clock in"]
          }
        }
      }
      for (const key in data.values) {
        if (data.values.hasOwnProperty(key) && data.values[key] === ListValue[idx]["Clock out"]) {
          ListValue[idx]["Clock out"] = {
            api_push: `${data.href}/buttons/${key}`,
            row_id: data.id,
            column_id: key,
            columnName: 'Clock out',
            data: ListValue[idx]["Clock out"]
          }
        }
      }
    })
  }


  const TriggerButton = async (api_push: string) => {
    setLoading(true);
    setListTimeTracker([])
    var updatedButton
    var checkerRow
    var backgroundCheck;
    updatedButton = await PushButton(api_push)
    const res = await GetTableData(docId, true, "simpleWithArrays")
    const payloadMsg = {
      name: "push_button",
      api_push,
      updatedButton,
      res
    }
    // chrome.runtime.sendMessage(payloadMsg, (response) => {
    //   console.log('Pushed Button', response)
    //   if (response === true) {
    //     setLoading(false);
    //   }
    // })
    checkerRow = res.map(row => JSON.stringify(row.values) === JSON.stringify(updatedButton.values))
    while (checkerRow.includes(true)) {
      updatedButton = await PushButton(api_push)
      checkerRow = res.map(row => JSON.stringify(row.values) === JSON.stringify(updatedButton.values))
    }
    console.log('======checkerRow======== ', checkerRow)
    getTableData()
    // var idxData;
    // res.filter((row, idx) => {
    //   if (row.id === updatedButton.id) {
    //     idxData = idx
    //   }
    // })
    // console.log('======idxData======== ', idxData)
    // res[idxData] = updatedButton
    // const ListValue = res.map(data => Object.assign({}, {
    //   id: data.id,
    //   ...data.values
    // }))
    // await UpdateValueButton(ListValue)
    // // setListRow(res)
    // setListTimeTracker(ListValue)
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }

  const columns = () => {
    return [
      {
        name: 'Category',
        selector: row => row.Category,
      },
      {
        name: 'Clock in',
        selector: row => {
          const ClockIn = JSON.parse(row["Clock in"].data ?? row["Clock in"])
          return (
            <>

              <ClockIn.formatType disabled={ClockIn?.disabled} className={ClockIn?.disabled ? "bg-slate-300 rounded-md p-2 font-semibold" : "bg-green-300 rounded-md p-2 font-semibold"} onClick={() => TriggerButton(row["Clock in"]?.api_push)}>Clock in</ClockIn.formatType>
            </>
          )
        },
      },
      {
        name: 'Clock out',
        selector: row => {
          const ClockOut = JSON.parse(row["Clock out"].data ?? row["Clock out"])
          return (
            <>

              <ClockOut.formatType disabled={ClockOut?.disabled} className={ClockOut?.disabled ? "bg-slate-300 rounded-md p-2 font-semibold" : "bg-red-300 rounded-md p-2 font-semibold"} onClick={() => TriggerButton(row["Clock out"]?.api_push)}>Clock Out</ClockOut.formatType>
            </>
          )
        },
      },
      {
        name: 'Total today',
        selector: row => row["Total today"],
      },
      {
        name: 'Current duration',
        selector: row => row["Current duration"],
      },
    ]
  };


  return (
    <div className='px-2 -mt-4' style={{
      width: '19rem'
    }}>

      {loading ? (
        <Lottie animationData={spinnerLoading} />
      ) : (
        <>
          <div className='flex flex-1 flex-row justify-center items-center mb-3 gap-2'>
            <div>
              <p>Time Tracking</p>
            </div>
            <div>
              <img src="https://cdn.coda.io/icons/svg/color/alarm-clock.svg" className='w-6 h-6' />
            </div>
          </div>
          <div className='flex flex-1 flex-row gap-2 px-2 mb-4'>
            <p>Choose Task : </p>
            <input type="text" value={selectTask} placeholder={selectTask} />
            {/* <select className='bg-slate-300 p-1 rounded-md' onChange={(e) => setSelectTask(e.target.value)}>
            <option selected value={currentTask.name}>{currentTask.name}</option>
          </select> */}
          </div>

          <div className='flex flex-1 flex-col gap-2 px-2 pt-2 pb-4'>
            <DataTable
              columns={columns()}
              data={loading ? [] : ListTimeTracker.filter(timeTrack => new RegExp(`${selectTask}`).test(timeTrack.Task))}
              selectableRows={false}
            />
          </div>

        </>
      )}

    </div>
  )

}

export default TimeSheet