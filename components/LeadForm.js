import { useState } from "react";
import axios from "axios";

export default function LeadForm({ onLeadAdded }) {
  const [form, setForm] = useState({ name: "", email: "", status: "NEW" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.LEAD_API_URL}/leads`, form);
      onLeadAdded(res.data);
      setForm({ name: "", email: "", status: "NEW" });
    } catch (err) {
      alert(err.response?.data?.error || "Error adding lead");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-gray-400 shadow-md rounded-md"
    >
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
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add Lead
      </button>
    </form>
  );
}
