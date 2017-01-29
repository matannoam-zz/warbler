import { h } from 'preact'

function Tracklist({ tracks = [] }) {
  var scTrackData = {
    title: 'Tigre',
    artists: 'Jarina De Marco',
    duration: '3:06',
    actionsEnabled: true,
    originalPage: "https://soundcloud.com/jarinademarcoofficial/tigre",
    sc_track_id: '281029126',
    streamUrl: 'https://api.soundcloud.com/tracks/281029126/stream?client_id=INSERT_CLIENT_ID'
  }

  function play(e) {
    document.getElementById('audio1').play()
  }

  function pause(e) {
    document.getElementById('audio1').pause()
  }

  function restart(e) {
    document.getElementById('audio1').currentTime = 0
  }

  return (
    <table className="tracklist">
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          tracks.map((track, key) => {
            return (
              <tr key={key}>
                <td><a href={track.originalPage} target="_blank">{track.title}</a></td>
                <td>{track.artists}</td>
                <td>{track.duration}</td>
                <td>
                  <audio controls>
                    <source src={track.fileUrl} />
                  </audio>
                </td>
              </tr>
            )
          })
        }
        <tr>
          <td><a href={scTrackData.originalPage} target="_blank">{scTrackData.title}</a></td>
          <td>{scTrackData.artists}</td>
          <td>{scTrackData.duration}</td>
          <td>
            <audio id='audio1'><source src={scTrackData.streamUrl} /></audio>
            <a onClick={play}>Play</a> - <a onClick={pause}>Pause</a> - <a onClick={restart}>Restart</a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tracklist
