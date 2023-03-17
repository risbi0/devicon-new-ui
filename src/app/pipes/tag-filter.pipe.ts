import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(icons: any[], search: string): any[] {
    if (search === 'None' || search === 'Filter by tag') return icons;

    return icons.filter((icon) => icon.tags.some((tag: string) => tag.includes(search.toLowerCase())));
  }
}
