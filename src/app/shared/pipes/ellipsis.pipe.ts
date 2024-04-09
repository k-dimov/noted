import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, maxCharCount = 40): string {
        if (value.length > maxCharCount) {
            return `${value.substring(0, maxCharCount)}...`
        }

        return value
	}
}
