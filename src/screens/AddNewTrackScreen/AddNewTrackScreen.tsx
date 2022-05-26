import Screen from 'components/Screen'
import SearchInput from 'components/SearchInput'
import useAppDispatch from 'hooks/useAppDispatch'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { music, MusicActions, MusicThunks } from 'store/Music'
import Header from './components/Header'
import TrackList from './components/TrackList'

const AddNewTrackScreen: React.FC = () => {
  // const [query, setQuery] = useState<string>('')

  const dispatch = useAppDispatch()
  const { query } = useSelector(music)

  useEffect(() => {
    if (query !== '') {
      dispatch(MusicThunks.SearchOnSpotify({ restart: true }))
    }
  }, [dispatch, query])

  return (
    <Screen>
      <Header />
      <SearchInput
        tPlaceholder='screens.addNewTrack.typeToSearch'
        value={query}
        onChangeText={text => dispatch(MusicActions.changeQuery({ query: text }))}
        onClearText={() => dispatch(MusicActions.changeQuery({ query: '' }))}
      />
      <TrackList />
    </Screen>
  )
}

export default AddNewTrackScreen
