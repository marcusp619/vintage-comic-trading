import {fetchComics } from '../fetchComic';
import {isLoading, hasErrored, comicFetchDataSuccess} from '../../actions';

describe('fetchComics', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    //mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch wtih the isLoading action', () => {
    const thunk = fetchComics()
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
})
