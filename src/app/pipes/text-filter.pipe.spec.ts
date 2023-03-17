import { TextFilterPipe } from './text-filter.pipe';

const mockData = [
  {
    title: 'React',
    name: 'react'
  },
  {
    title: 'Angular',
    name: 'angular'
  },
  {
    title: 'Vue.js',
    name: 'vue',
  }
];

const expectedResult = [
  {
    title: 'Angular',
    name: 'angular' }
  ];

describe('TextFilterPipe', () => {
  it('should filter based on title', () => {
    const pipe = new TextFilterPipe();
    expect(pipe.transform(mockData, 'angular')).toEqual(expectedResult);
  });

  it('should filter based on name', () => {
    const pipe = new TextFilterPipe();
    expect(pipe.transform(mockData, 'angular')).toEqual(expectedResult);
  });
});
