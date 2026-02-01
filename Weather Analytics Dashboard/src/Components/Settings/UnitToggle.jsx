import { useDispatch, useSelector } from "react-redux"
import {toggleUnit} from '../../features/settings/settingsSlice'

function UnitToggle() {
    const dispatch=useDispatch()
    const unit=useSelector((state)=>state.settings.unit)
  return (
    <div style={{ marginBottom: "16px" }}>
      <button onClick={() => dispatch(toggleUnit())}>
        Switch to {unit === "metric" ? "°F" : "°C"}
      </button>
    </div>

  )
}

export default UnitToggle