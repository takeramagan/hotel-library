import {
  html,
  fixture,
  defineCE,
  unsafeStatic,
  expect,
} from '@open-wc/testing';
import { ReservationTable } from '../ReservationTable';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '32 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '42 Downing Street',
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

describe('successfull redered', () => {
  it('redered', async () => {
    const tag = defineCE(ReservationTable);
    const element = await fixture(
      html`<${tag} .dataSource=${dataSource} .columns=${columns}></${tag}>`,
    );
  });
});
