import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

const us = [
  {
    id: 1,
    name: 'patel',
    company: 'bsi',
    avatarUrl: 'https://media.glassdoor.com/sqls/97/best-buy-squarelogo-1554302142977.png',
    rating: 5.7
  },
  {
    id: 2,
    // eslint-disable-next-line prettier/prettier
    'name': 'buntys',
    company: 'bsa',
    avatarUrl: 'https://media.glassdoor.com/sqls/97/best-buy-squarelogo-1554302142977.png',
    rating: 5.8
  },
  {
    id: 3,
    name: 'asd',
    company: 'dsa',
    avatarUrl: 'https://media.glassdoor.com/sqls/233193/hzdg-squarelogo-1493834118500.png',
    rating: 5.1
  },
  {
    id: 4,
    name: 'asd',
    company: 'dsa',
    avatarUrl:
      'https://media.glassdoor.com/sqls/910168/carnegie-robotics-squarelogo-1549996979346.png',
    rating: 5.5
  },
  {
    id: 5,
    name: 'asd',
    company: 'dsa',
    rating: 5.0
  },
  {
    id: 6,
    name: 'asd',
    company: 'dsa',
    rating: 5.0
  },
  {
    id: 7,
    name: 'asd',
    company: 'dsa',
    rating: 5.0
  },
  {
    id: 8,
    name: 'asd',
    company: 'dsa',
    rating: 5.0
  },
  {
    id: 9,
    name: 'asd',
    company: 'dsp',
    rating: 5.0
  },
  {
    id: 10,
    name: 'asd',
    company: 'dso',
    rating: 5.0
  }
];

export default us;
