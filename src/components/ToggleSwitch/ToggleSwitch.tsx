import { SetStateAction, useState } from 'react'
import './style.scss'

export function ToggleSwitch() {
  const [checked, setChecked] = useState(false)

  console.log('Checked', checked)

  const handleCheck = () => {
    setChecked((prevState) => !prevState)
  }

  return (
    <>
        <label className="toggleSwitchWrapper">
          <input onClick={handleCheck} type="checkbox" />
          <span/>
        </label>
    </>
  )
}