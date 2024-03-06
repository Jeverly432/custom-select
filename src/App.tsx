import './App.css'
import SelectTransition from './ui/selectTransition'
import Select from './ui/select'
import 'twin.macro'

const selectData = {
  options: [
    {
      option: 'account',
    },
    {
      option: 'wallet',
    },
    {
      option: 'bonuses',
    },
    {
      option: 'bets',
    },
    {
      option: 'history',
    },
  ],
  title: 'ACCOUNT',
  width: 240,
}

function App() {
  return (
    <div tw="flex w-full">
      <ul tw="flex gap-10 w-full mx-auto">
        <li tw='flex flex-col items-center gap-4'>
          <label tw='text-white'>С использованием transition-group</label>
          <SelectTransition options={selectData.options} title={selectData.title} width={selectData.width} />
        </li>
        <li tw='flex flex-col items-center gap-4'>
        <label tw='text-white'>Без transition-group</label>
          <Select options={selectData.options} title={selectData.title} width={selectData.width} />
        </li>
      </ul>
    </div>
  )
}

export default App
