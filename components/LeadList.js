export default function LeadList({ leads, onDelete, onEdit }) {
  return (
    <ul className="mt-4 space-y-2">
      {leads.map((lead) => (
        <li
          key={lead.id}
          className="bg-gray-700 p-4 rounded shadow-sm flex justify-between items-center"
        >
          <div>
            <div className="font-bold">{lead.name}</div>
            <div className="text-sm text-blue-400">{lead.email}</div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              {lead.status}
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(lead)}
              className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(lead.id)}
              className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}