import TrackPlayer, {Capability, Event} from 'react-native-track-player';

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
    url: 'http://91.240.86.151:8070/stream',
  });

  TrackPlayer.stop();
};
