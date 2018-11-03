import * as actions from './';

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    //setup
    const bool = 'true';

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: 'true',
    };

    //execution
    const results = actions.isLoading(bool);

    //expectation
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of hasErrored', () => {
    //setup
    const bool = 'true';

    const expectedAction = {
      type: 'HAS_ERRORED',
      hasErrored: 'true',
    };

    //execution
    const result = actions.hasErrored(bool);

    //expectation
    expect(result).toEqual(expectedAction);
  })
});
