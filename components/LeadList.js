export default function LeadList({ leads }) {
  return (
    <ul className="mt-4 space-y-2">
      {leads.map((lead) => (
        <li key={lead._id} className="bg-gray-100 p-4 rounded shadow-sm">
          <div className="font-bold">{lead.name}</div>
          <div className="text-sm text-gray-700">{lead.email}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            {lead.status}
          </div>
        </li>
      ))}
    </ul>
  );
}