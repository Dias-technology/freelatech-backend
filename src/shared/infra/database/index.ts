import { createConnection, getConnectionOptions } from 'typeorm'

export const PostgresHelper = {
	async connect(): Promise<void> {
		const defaultOptions = await getConnectionOptions()
		await createConnection(
			Object.assign(defaultOptions, {
				extra: {
					max: 700,
					min: 0,
					acquireTimeoutMillis: 60000,
				},
			}),
		)
	},
}
