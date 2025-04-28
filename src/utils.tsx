import React from 'react'

export const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	return `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`
}

export const formatReach = (reach: number) => (reach >= 1000 ? `${Math.round(reach / 1000)}K` : reach.toString())

export const getCountryFlag = (countryCode: string) => {
	const codePoints = countryCode
		.toUpperCase()
		.split('')
		.map(char => 127397 + char.charCodeAt(0))
	return String.fromCodePoint(...codePoints)
}

export const renderHighlightedText = (text: string) => {
	const parts: React.ReactNode[] = []
	let currentIndex = 0
	let isHighlighted = false

	while (currentIndex < text.length) {
		const openTagIndex = text.indexOf('<kw>', currentIndex)
		const closeTagIndex = text.indexOf('</kw>', currentIndex)

		if (openTagIndex === -1 && closeTagIndex === -1) {
			// Добавляем оставшийся текст
			parts.push(<span key={currentIndex}>{text.slice(currentIndex)}</span>)
			break
		}

		if (openTagIndex !== -1 && (closeTagIndex === -1 || openTagIndex < closeTagIndex)) {
			// Добавляем текст до открывающего тега
			if (openTagIndex > currentIndex) {
				parts.push(<span key={currentIndex}>{text.slice(currentIndex, openTagIndex)}</span>)
			}
			isHighlighted = true
			currentIndex = openTagIndex + 4 // длина '<kw>'
		} else if (closeTagIndex !== -1) {
			// Добавляем текст до закрывающего тега
			if (closeTagIndex > currentIndex) {
				const content = text.slice(currentIndex, closeTagIndex)
				parts.push(
					isHighlighted ? (
						<span key={currentIndex} className='keyword-highlight'>
							{content}
						</span>
					) : (
						<span key={currentIndex}>{content}</span>
					)
				)
			}
			isHighlighted = false
			currentIndex = closeTagIndex + 5 // длина '</kw>'
		}
	}

	return parts
}
