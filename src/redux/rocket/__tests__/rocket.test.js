import rocketReducer, { storeRocketData, reserveRocketTicket, cancelRocketTicket } from "../rocket";

 const payload = [
  {
    rocket_id: 'falcon1',
    rocket_type: 'rocket',
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_name: 'Falcon 1',
    wikipedia:  "https://en.wikipedia.org/wiki/Falcon_1",
  }
 ];

const {
  rocket_id: id,
  rocket_type: type,
  rocket_name: name,
  flickr_images: flickrImages,
  description,
  wikipedia,
} = payload[0];
const currentState = [{ id, type, name, flickrImages, description, wikipedia }];

 describe('rocketReducer', () => {
  it('returns the default state [] when called with no action', () => {
    expect(rocketReducer(undefined,{})).toEqual([]);
  });

  it('return a state equal to the payload', () => {
    expect(rocketReducer([], storeRocketData(payload))).toEqual(currentState);
  });

  it('adds reserved: true state', () => {
    expect(
      rocketReducer(currentState, reserveRocketTicket(payload[0].rocket_id)),
    ).toEqual([{ ...currentState[0], reserved: true }]);
  });

  it('Changes reserved values to false', () => {
    expect(
      rocketReducer(currentState, cancelRocketTicket(payload[0].rocket_id)),
    ).toEqual([{ ...currentState[0], reserved: false }]);
  });

 });