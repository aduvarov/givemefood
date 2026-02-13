import { IsString, MinLength } from 'class-validator'

export class RefreshTokensDTO {
	@IsString()
	@MinLength(1)
	refreshToken: string
}
