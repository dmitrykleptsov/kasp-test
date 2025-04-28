import React from 'react'
import { Button, Space } from 'antd'
import { InfoCircleOutlined, BorderOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons'
import { format } from 'date-fns'
import { INewsDuplicates } from '../../../types/types'
import { ICONS } from '../../../constants/inlineStyles/icons'

import './style.scss'

const Index: React.FC<INewsDuplicates> = ({ data }) => {
	const formattedDate = format(new Date(data.date), 'dd MMM yyyy')
	const formattedReach = `${Math.round(data.reach / 1000)}K`

	return (
		<div className='duplicate-preview'>
			<div className='duplicate-header'>
				<div className='duplicate-meta'>
					<span className='date'>{formattedDate}</span>
					<span className='reach'>{formattedReach} Top Reach</span>
				</div>
				<div className='duplicate-actions'>
					<Button
						type='text'
						icon={<InfoCircleOutlined style={{ fontSize: ICONS.ICON_FONTSIZE }} />}
						className='icon-button'
					/>
					<Button
						type='text'
						icon={<BorderOutlined style={{ fontSize: ICONS.ICON_FONTSIZE }} />}
						className='icon-button'
					/>
				</div>
			</div>

			<h3 className='duplicate-title'>
				<a href={data?.url || '#'} target='_blank' rel='noopener noreferrer'>
					{data?.title}
				</a>
			</h3>

			<div className='duplicate-source'>
				<Space>
					<span className='source-item'>
						<GlobalOutlined />{' '}
						{data?.domain && (
							<a
								href={`https://${data.domain}`}
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
							>
								{data.domain}
							</a>
						)}
					</span>
					{data?.country && (
						<span className='source-item'>
							{data?.countryCode && (
								<img
									src={`https://flagcdn.com/w20/${data.countryCode.toLowerCase()}.png`}
									alt={`${data.country} flag`}
									className='country-flag'
								/>
							)}
							{data.country}
						</span>
					)}
					{data?.authors?.length ? (
						<span className='source-item'>
							<UserOutlined /> {data.authors.join(', ')}
						</span>
					) : null}
				</Space>
			</div>
		</div>
	)
}

export default Index
