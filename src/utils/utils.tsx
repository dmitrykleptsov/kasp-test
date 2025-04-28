import React from 'react'

export const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	return `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`
}

export const formatReach = (reach: number) => (reach >= 1000 ? `${Math.round(reach / 1000)}K` : reach.toString())

export const renderHighlight = (text: string) => {
	const parts = text.split(/(<kw>.*?<\/kw>)/g)

	return parts.map((part, index) => {
		if (part.startsWith('<kw>') && part.endsWith('</kw>')) {
			return (
				<span key={index} className='highlight-keyword'>
					{part.replace(/<kw>|<\/kw>/g, '')}
				</span>
			)
		}

		return <React.Fragment key={index}>{part}</React.Fragment>
	})
}
