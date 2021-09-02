import reducer, { loadMissions, joinMission, leaveMission } from '../mission';

const payload = [{
  id: '9D1B7E0',
  name: 'Thaicom',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
}];

describe('Mission Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual([]);
  });

  it('handles loading of missions', () => {
    expect(reducer([], loadMissions(payload))).toEqual(payload);
  });

  it('handles joining of missions', () => {
    expect(
      reducer(payload, joinMission(payload[0].id)),
    ).toEqual([{ ...payload[0], reserved: true }]);
  });

  it('handles leaving of missions', () => {
    expect(
      reducer(payload, leaveMission(payload[0].id)),
    ).toEqual([{ ...payload[0], reserved: false }]);
  });
});
