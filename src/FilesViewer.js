import { IconFolder, IconFile, IconFolderOpen } from './Icons'
import DeleteButton from './DeleteButton'
export const FilesViewer = ({ files, onBack, onOpen, deleteFile }) => (
  <table class="table">
    <tbody>
      <tr className="clickable" onClick={onBack}>
        <td className="icon-row">
          <IconFolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>

      {files.map(({ name, directory, size }) => {
        return (
          <tr className="clickable" onClick={() => directory && onOpen(name)}>
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span className="float-end">{size}</span>
            </td>
            <td>
              {
                !directory &&
                <DeleteButton name={name} deleteFile={deleteFile} />
              }
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
