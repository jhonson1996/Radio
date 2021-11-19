import TrackPlayer, {Capability, Event} from 'react-native-track-player';
import {constants} from '../Constants';

export const radioInit = async () => {
  TrackPlayer.registerPlaybackService(
    () =>
      async function () {
        TrackPlayer.addEventListener(Event.RemotePlay, () =>
          TrackPlayer.play(),
        );
        TrackPlayer.addEventListener(Event.RemotePause, () =>
          TrackPlayer.pause(),
        );
      },
  );

  try {
    TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [Capability.Play, Capability.Pause],
    });

    await TrackPlayer.setupPlayer();
  } catch (e) {
    console.log(e);
    // to-do handle error
  }

  await TrackPlayer.add({
    url: constants.STREAMING_URL,
  });

  TrackPlayer.play();
};
