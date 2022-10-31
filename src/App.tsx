import Button from './components/button'
import { ChevronDown, Sort } from './components/icons'
import Select from './components/select'
import SplitButton from './components/SplitButton/Index'
import {
  checkboxSelectOptions,
  normalSelectOptions,
  normalWithIconSelectOptions,
  radioSelectOptions,
} from './data'

function App() {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked')
  }
  const handleSecondaryClick = () => {
    console.log('Secondary button clicked')
  }
  return (
    <>
      <SplitButton
        primaryLabel={'Primary action'}
        secondaryLabel={'Secondary action'}
        handlePrimaryClick={handlePrimaryClick}
        handleSecondaryClick={handleSecondaryClick}
      />
      <Button label={'Save'} handleButtonClick={handlePrimaryClick} />

      <Select
        options={normalSelectOptions}
        TriggerIconLeft={Sort}
        triggerTitle={'Sort'}
        activeBeacon={true}
        TriggerIconRight={ChevronDown}
      />
      <Select options={normalWithIconSelectOptions} type="multi-normal" />
      <Select options={checkboxSelectOptions} type="multi-checkbox" />
      <Select options={radioSelectOptions} type="single-radio" />
    </>
  )
}

export default App
