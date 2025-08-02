import { useState, useEffect } from "react";

export default function EditLeadForm({ lead, onUpdate, onCancel }) {
  const [form, setForm] = useState({ name: "", email: "", status: "" });

  useEffect(() => {
    if (lead) {
      setForm({ name: lead.name, email: lead.email, status: lead.status });
    }
  }, [lead]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(lead.id, form);
  };

  if (!lead) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 bg-gray-800 shadow-md rounded-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center text-white">Edit Lead</h2>
        <input
          name="name"
          className="w-full p-2 border rounded text-gray-900"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          className="w-full p-2 border rounded text-gray-900"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          className="w-full p-2 border rounded text-gray-900"
          value={form.status}
          onChange={handleChange}
        >
          <option value="NEW">New</option>
          <option value="ENGAGED">Engaged</option>
          <option value="PROPOSAL_SENT">Proposal Sent</option>
          <option value="CLOSED_WON">Closed-Won</option>
          <option value="CLOSED_LOST">Closed-Lost</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Update Lead
          </button>
        </div>
      </form>
    </div>
  );
}
