import { useState } from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CopyIcon, CheckIcon } from '../Icons'

export default function Accordion1() {
	const copyCode = `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + React</title>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.jsx"></script>
	</body>
</html>
	`
	const [copy, setCopy] = useState(false)
	return (
		<div className='bg-gray-500 grid place-items-center h-screen'>
			<div className='max-w-6xl min-w-[25rem] bg-[#3A404D] rounded-md'>
				<div className='flex justify-between px-4 py-1 text-white text-xs items-center z-20'>
					<p className='text-sm'>Example Code</p>
					{copy ? (
						<button
							className='py-1 inline-flex items-center gap-1'
							onClick={() => {
								console.log('copy')
							}}
						>
							<span className='text-base mt-1 inline-flex items-center'>
								<CheckIcon />
							</span>
							Copied!
						</button>
					) : (
						<button
							className='py-1 inline-flex items-center gap-1'
							onClick={() => {
								console.log('copy')
								navigator.clipboard.writeText(copyCode)
								setCopy(true)
								setTimeout(() => {
									setCopy(false)
								}, 3000)
							}}
						>
							<span className='text-base mt-1 inline-flex items-center'>
								<CopyIcon />
							</span>
							Copy
						</button>
					)}
				</div>
				<SyntaxHighlighter
					language='html'
					style={nightOwl}
					customStyle={{ padding: '20px' }}
					// wrapLongLines={true}
				>
					{copyCode}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}
