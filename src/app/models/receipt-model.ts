import { Image } from '../services/image-service.service';

export class Receipt {
	constructor(public id: string, public amount: number, public date: Date, public imgSrc: Image) {}
}
