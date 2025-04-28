import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { sampleData } from './constants/sampleData'
import { COLORS } from './constants/inlineStyles/colors'
import NewsSnippet from './components/NewsSnippet'
import './style.global.scss'

const App: React.FC = () => (
	<ConfigProvider
		theme={{
			algorithm: theme.darkAlgorithm,
			token: {
				colorPrimary: COLORS.REG_BLUE,
				borderRadius: 6,
				colorBgContainer: COLORS.BG_CONTAINER,
				colorText: COLORS.REG_TEXT_WHITE
			}
		}}
	>
		<NewsSnippet data={sampleData} />
	</ConfigProvider>
)

export default App
