import Label from 'components/Label'
import useAppDispatch from 'hooks/useAppDispatch'
import useColorScheme from 'hooks/useColorScheme'
import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import React from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { music, MusicThunks } from 'store/Music'
import Spacer from './Spacer'
import TrackItem from './TrackItem'

const TrackList: React.FC = () => {
  const { loading, refreshing, paging, list, error } = useSelector(music)
  const styles = useThemedStyles(themedStyles)
  const colors = useColorScheme()

  const dispatch = useAppDispatch()

  if (loading) {
    return (
      <View style={[styles.root, styles.center]}>
        <ActivityIndicator size='large' color={colors.Common.White} />
      </View>
    )
  }

  if (error !== undefined) {
    return (
      <View style={[styles.root, styles.center]}>
        <Label.H3 t={error} style={styles.error} />
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <FlatList
        refreshing={refreshing}
        data={list}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Spacer.V />}
        renderItem={({ item }) => <TrackItem track={item} />}
        onEndReachedThreshold={0.4}
        onEndReached={() => dispatch(MusicThunks.SearchOnSpotify({ restart: false }))}
      />
    </View>
  )
}

const themedStyles = createThemedStyles(({ fonts, colors, metrics }) => ({
  root: {
    flex: 1
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  error: {
    color: colors.Negative,
    fontSize: fonts.sizes.md
  },

  listContainer: {
    paddingVertical: metrics.md
  }
}))

export default TrackList
