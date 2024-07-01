import { useState } from "react"
import "./App.css"
import { SuccessButton } from "./components/Buttons"

interface todo {
  id: number,
  title: string
}

function App() {
  const [value, setValue] = useState<string>("")
  const [valueList, setValueList] = useState<string>("")
  const [data, setData] = useState<todo[]>([])
  const [isActive, setIsActive] = useState<boolean>(true)
  const [number, setNumber] = useState<number | null>(null);

  const handleSubmit = () => {
    setData([...data, { id: data.length > 0 ? data[data.length - 1].id + 1 : 1, title: value },])
    setValue("")
  }

  const editList = (id: number) => {
    setNumber(isActive ? id : null);

    if (isActive) {
      setIsActive(false)
    } else {
      setData(prev => {
        return prev.map(event => {
          if (event.id === id) {
            return {
              ...event,
              title: valueList
            };
          }
          return event;
        });
      })
      setIsActive(true)
    }
  }

  const deleteList = (id: number) => {
    setData(prev => {
      return prev.filter(event => {
        return event.id !== id
      })
    })
  }

  console.log("data", data);



  return (
    <div className="wrapper">
      <div className="d-flex align-items-center justify-content-between">
        <input type="text" onChange={e => setValue(e.target.value)} value={value} />
        <SuccessButton onClick={handleSubmit} title={"Add List"} icon={<i className='bx bxs-add-to-queue'></i>} disabled={value === ""} />
      </div>
      <ul>
        {data?.map((item: any) => {
          return <li key={item.id} style={{ border: number === item.id ? "1px solid" : "" }}>
            <input className="w-100" type="text" defaultValue={item?.title} disabled={isActive} onChange={e => setValueList(e.target.value)} readOnly={number !== item.id} />
            <div className="actions">
              {number === item.id ? <i className='bx bxs-message-square-check text-success' onClick={() => editList(item?.id)}></i> :
                <i className='bx bxs-message-square-edit' onClick={() => editList(item?.id)}></i>}
              <i className='bx bxs-message-square-x' onClick={() => deleteList(item?.id)}></i>
            </div></li>
        })}
      </ul>
    </div>
  )
}

export default App
