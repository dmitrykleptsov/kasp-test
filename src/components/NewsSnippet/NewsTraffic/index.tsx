import React from 'react'
import { IData_TrafficItem, INewsMeta } from '../../../types/types'

const Index: React.FC<INewsMeta> = ({ traffic }: { traffic: IData_TrafficItem[] }) => {
	const topTraffic = traffic?.length
		? traffic.map(item => ({
				...item,
				percentage: item?.count ? `${Math.round(item.count * 100)}%` : '<1%'
		  }))
		: null

	return (
		<>
			{topTraffic?.length && (
				<span className='traffic'>
					Top Traffic:&nbsp;
					{topTraffic.map((item, index) => (
						<React.Fragment key={`${index}_country`}>
							{item?.value || ''}{' '}
							<strong style={{ color: 'var(--text-color)' }}>{item.percentage} </strong>
						</React.Fragment>
					))}
				</span>
			)}
		</>
	)
}

export default React.memo(Index)
