import {comics, isLoading, hasErrored} from './comics-reducers';

describe('comics reducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];

    //execution
    const result = comics(undefined, []);

    //expectation
    expect(result).toEqual(expected);
  });

  it('shoudl return state with new comic', () => {
    //setup
    const expected = [
      {
        id: 1009718,
        name: 'Wolverine',
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
      },
    ];

    const mockAction = {
      type: 'COMICS_FETCH_DATA_SUCCESS',
      comic: {
        id: 1009718,
        name: 'Wolverine',
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
      },
    };

    //execution
    const result = comics(undefined, mockAction);

    //expectation
    expect(result).toEqual(expected);
  });

  describe('isLoading reducer', () => {
    it('should return intial state', () => {
      //setup
      const expected = false;

      //execution
      const result = isLoading(undefined, '');

      //expectation
      expect(result).toEqual(expected);
    });

    it('should return state with isLoading false', () => {
      //setup
      const expected = 'false';
      const mockAction = {
        type: 'IS_LOADING',
        isLoading: 'false' 
      }

      //execution
      const result = isLoading(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    })
    
    it('should return state with isLoading true', () => {
      //setup
      const expected = 'true';
      const mockAction = {
        type: 'IS_LOADING',
        isLoading: 'true' 
      }

      //execution
      const result = isLoading(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    })

  });
});
