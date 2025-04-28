import React from 'react'
import { Space, Tag, Button } from 'antd'
import { CaretDownOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons'
import { INewsContent } from '../../../types/types'
import { renderHighlight } from '../../../utils/utils'
import { formFlagUrl } from '../../../constants/flags'

import './style.scss'

const Index: React.FC<INewsContent> = ({ title, url, domain, country, countryCode, language, authors, highlights }) => {
	return (
		<div className='news-content'>
			<h2 className='news-title'>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					{title}
				</a>
			</h2>

			<div className='news-source'>
				<Space>
					<span className='source-item'>
						<GlobalOutlined />{' '}
						<a href={`https://${domain}`} target='_blank' rel='noopener noreferrer'>
							{domain}
						</a>
					</span>
					<span className='source-item'>
						<img src={formFlagUrl(countryCode)} alt={`${country} flag`} className='country-flag' />
						{country}
					</span>
					<Tag className='lang-tag'>{language.toUpperCase()}</Tag>
					{authors?.length > 0 && (
						<span className='source-item'>
							<UserOutlined /> {authors.join(', ')}
						</span>
					)}
				</Space>
			</div>

			<div className='news-highlights'>
				{highlights.map((highlight, index) => (
					<div key={index} className='highlight-text'>
						{renderHighlight(highlight)}
					</div>
				))}
				<Button className='show-more'>
					Show more
					<CaretDownOutlined style={{ marginBottom: '-3px' }} />
				</Button>
			</div>
		</div>
	)
}

export default Index
