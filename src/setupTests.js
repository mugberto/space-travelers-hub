// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

const handlers = [
  rest.get('https://api.spacexdata.com/v3/rockets', (req, res, ctx) => res(ctx.json([{
    rocket_id: 'falcon1',
    rocket_type: 'rocket',
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_name: 'Falcon 1',
  }]), ctx.delay(150))),
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(ctx.json([{
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  }]), ctx.delay(150))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
