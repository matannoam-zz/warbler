import { h } from 'preact';

function Tracklist({ tracks = [] }) {
  var scTrack = {
    title: 'Tigre',
    artists: 'Jarina De Marco',
    duration: '3:06',
    actionsEnabled: true,
    originalPage: "https://soundcloud.com/jarinademarcoofficial/tigre"
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
          <td><a href={scTrack.originalPage} target="_blank">{scTrack.title}</a></td>
          <td>{scTrack.artists}</td>
          <td>{scTrack.duration}</td>
          <td>
            <audio controls>
            </audio>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tracklist
