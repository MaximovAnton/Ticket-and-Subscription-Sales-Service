import { ApiProperty } from "@nestjs/swagger"

export class HealthResponse {
    @ApiProperty({
        example: 'Ok'
    })
    public status: string

    @ApiProperty({
        example: '2021-11-02T10:35:57'
    })
    public timestamp: string
}
