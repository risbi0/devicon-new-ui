import { TagFilterPipe } from './tag-filter.pipe';

describe('TagFilterPipe', () => {
  it('should filter based on tags', () => {
    const pipe = new TagFilterPipe();
    const mockData = [{ tags: ['programming'] }, { tags: ['framework', 'javascript'] }, { tags: ['framework'] }];
    expect(pipe.transform(mockData, 'framework')).toEqual([
      { tags: ['framework', 'javascript'] },
      { tags: ['framework'] }
    ]);
  });
});
