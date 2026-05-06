import { Injectable } from '@nestjs/common'
import { timestamp } from 'rxjs'

@Injectable()
export class AppService {
	public getHello() {
		return { message: 'Hello SmartBee'}
	}

	public health(){
		return {
			status: "оk",
			timestamp: new Date().toISOString()
		}
	}
}
