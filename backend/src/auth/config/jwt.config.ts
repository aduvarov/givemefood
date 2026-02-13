import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = async (
	ConfigService: ConfigService
): Promise<JwtModuleOptions> => ({
	secret: await ConfigService.getOrThrow('JWT_SECRET')
})
