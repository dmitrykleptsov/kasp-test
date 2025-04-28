import React from 'react'
import { Tag, Button } from 'antd'
import { INewsKeywords } from '../../../types/types'
import { COLORS } from '../../../constants/inlineStyles/colors'

import './style.scss'

const Index: React.FC<INewsKeywords> = ({ keywords }) => {
	return (
		<div className='news-keywords'>
			{keywords?.map((tag, index) => (
				<Tag style={{ background: COLORS.TRANSPARENT }} key={`${index}_tag`} className='keyword-tag'>
					<span className='tag-name'>{tag?.value || ''}</span>
					<span className='tag-count'>{tag?.count || ''}</span>
				</Tag>
			))}
			{keywords?.length && <Button className='show-all'>Show All +{keywords.length}</Button>}
		</div>
	)
}

export default Index
