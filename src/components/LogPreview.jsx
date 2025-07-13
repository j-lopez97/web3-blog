import { NotoRedPaperLantern } from '../components/CustomIcons.jsx';

export default function LogPreview({ title, snippet }) {
  return (
    <div className="flex space-x-3 items-start">
      <NotoRedPaperLantern width={32} />
      <div>
        <h3 className="font-mono text-spiritGold-100 text-lg">{title}</h3>
        <p className="font-mono text-fog-500 text-sm">{snippet}</p>
      </div>
    </div>
  );
}