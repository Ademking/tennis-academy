import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, trail = '...'): string {
    if (value.length <= limit) {
      return value;
    }

    const substr = value.substring(0, limit - trail.length).split(' ');
    const isLastWordFull = value
      .split(' ')
      .find(w => w === substr[substr.length - 1]);

    if (isLastWordFull) {
      return substr.join(' ') + trail;
    }

    return substr.slice(0, -1).join(' ') + trail;
  }
}
