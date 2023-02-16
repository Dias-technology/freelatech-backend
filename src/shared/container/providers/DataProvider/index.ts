import { container } from 'tsyringe'

import { IDateProvider } from '@/shared/container/providers/DataProvider/IDataProvider'
import { DayjsDateProvider } from '@/shared/container/providers/DataProvider/implementations/DayjsDateProvider'

container.registerSingleton<IDateProvider>(
	'DayjsDateProvider',
	DayjsDateProvider,
)
