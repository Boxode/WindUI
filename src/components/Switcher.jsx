import { Switch } from '@nextui-org/react'
import { SunIcon, MoonIcon } from './Icons'

export default function App() {
	return (
		<Switch
			defaultSelected
			size='lg'
			color='yellow'
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
		></Switch>
	)
}
