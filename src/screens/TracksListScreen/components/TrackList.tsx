import { createThemedStyles, useThemedStyles } from 'hooks/useThemedStyles'
import { Track } from 'models/firebaseModels'
import React from 'react'
import { FlatList, View } from 'react-native'
import AddTrackButton from './AddTrackButton'
import HeadingImage from './HeadingImage'
import Spacer from './Spacer'
import TrackItem from './TrackItem'

interface Props {
  tracks: Track[]
}

const TrackList: React.FC<Props> = ({ tracks }) => {
  const styles = useThemedStyles(themedStyles)

  return (
    <View style={styles.root}>
      <FlatList
        data={tracks}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View>
            <HeadingImage tracks={tracks} />
            <View style={styles.buttonContainer}>
              <AddTrackButton />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <Spacer.V />}
        renderItem={({ item }) => <TrackItem track={item} />}
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

  buttonContainer: {
    flexDirection: 'row',
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
