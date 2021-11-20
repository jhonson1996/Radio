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
        TrackPlayer.addEventListener(Event.RemoteStop, () => 
          TrackPlayer.pause(),
        );
      },
  );

  try {
    TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
    });

    await TrackPlayer.setupPlayer();
  } catch (e) {
    console.log(e);
    // to-do handle error
  }

  await TrackPlayer.add({
    url: constants.STREAMING_URL,
    title: 'ESTACION LATINA UK',
    artwork: `${require('./img/Logo1.png')}`,
    artist: 'Al AIRE',
    
  });

  TrackPlayer.play();
};
