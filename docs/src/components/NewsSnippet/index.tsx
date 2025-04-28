import React, { useState } from 'react'
import { Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { INewsSnippet } from '../../types/types'
import { COLORS } from '../../constants/inlineStyles/colors'
import NewsHeader from './NewsHeader/index'
import NewsContent from './NewsContent/index'
import NewsKeywords from './NewsKeywords/index'
import NewsDuplicates from './NewsDuplicates/index'

import './style.scss'

const Index: React.FC<INewsSnippet> = ({ data }) => {
	const [showDuplicates, setShowDuplicates] = useState(false)

	return (
		<div className='news-snippet'>
			<NewsHeader date={data.DP} reach={data.REACH} traffic={data.TRAFFIC} sentiment={data.SENT} />

			<NewsContent
				title={data.TI}
				url={data.URL}
				domain={data.DOM}
				country={data.CNTR}
				countryCode={data.CNTR_CODE}
				language={data.LANG}
				authors={data.AU}
				highlights={data.HIGHLIGHTS}
			/>

			<NewsKeywords keywords={data.KW} />

			<div className='news-footer'>
				<Button type='primary' ghost className='source-btn'>
					Original Source
				</Button>
			</div>

			<div className='duplicates-info'>
				<span>
					<span className='duplicates-label'>Duplicates:</span> 192
				</span>
				<Button style={{ color: COLORS.REG_GREY }} type='text'>
					By Relevance {<DownOutlined style={{ color: COLORS.REG_WHITE }} />}
				</Button>
			</div>

			{showDuplicates && (
				<NewsDuplicates
					data={{
						date: data.DP,
						reach: data.REACH,
						title: data.TI,
						url: data.URL,
						domain: data.DOM,
						country: data.CNTR,
						countryCode: data.CNTR_CODE,
						authors: data.AU
					}}
				/>
			)}

			<Button
				style={{ background: COLORS.TRANSPARENT }}
				block
				className='view-duplicates-btn'
				onClick={() => setShowDuplicates(!showDuplicates)}
			>
				{showDuplicates ? <UpOutlined /> : <DownOutlined />} View Duplicates
			</Button>
		</div>
	)
}

export default Index
