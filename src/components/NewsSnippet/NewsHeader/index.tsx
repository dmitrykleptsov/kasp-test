import React from 'react'
import { Tag } from 'antd'
import { BorderOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { format } from 'date-fns'
import { INewsHeader } from '../../../types/types'
import { ICONS } from '../../../constants/inlineStyles/icons'
import NewsTraffic from '../NewsTraffic'

import './style.scss'

const Index: React.FC<INewsHeader> = ({ date, reach, traffic, sentiment }) => {
	const formattedDate = format(new Date(date), 'dd MMM yyyy')
	const [day, month, year] = formattedDate.split(' ')
	const formattedReach = `${Math.round(reach / 1000)}K`

	return (
		<div className='news-header'>
			<div className='news-meta'>
				<span className='date'>
					<span className='day'>{day}</span>{' '}
					<span className='month-year'>
						{month} {year}
					</span>
				</span>
				<span className='reach'>{formattedReach} Reach</span>
				<NewsTraffic traffic={traffic} />
			</div>
			<div className='news-actions'>
				<Tag
					style={{ marginRight: '0', height: '20px', padding: '0 10px' }}
					className={`sentiment-tag ${sentiment.toLowerCase()}`}
				>
					<div className='sentiment'>{sentiment}</div>
				</Tag>
				<InfoCircleOutlined style={{ fontSize: ICONS.ICON_FONTSIZE }} />
				<BorderOutlined style={{ fontSize: ICONS.ICON_FONTSIZE }} />
			</div>
		</div>
	)
}

export default Index
