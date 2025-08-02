"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import EditLeadForm from "../components/EditLeadForm";

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [editingLead, setEditingLead] = useState(null);

  const fetchLeads = async () => {
    const res = await axios.get("https://lead-manager-api.onrender.com/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://lead-manager-api.onrender.com/leads/${id}`);
      setLeads(leads.filter((lead) => lead.id !== id));
    } catch (err) {
      alert("Error deleting lead");
    }
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await axios.put(
        `https://lead-manager-api.onrender.com/leads/${id}`,
        updatedData
      );
      setLeads(
        leads.map((lead) => (lead.id === id ? { ...lead, ...res.data } : lead))
      );
      setEditingLead(null);
    } catch (err) {
      alert("Error updating lead");
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Lead Manager</h1>
      <LeadForm onLeadAdded={(newLead) => setLeads([...leads, newLead])} />
      <LeadList leads={leads} onDelete={handleDelete} onEdit={handleEdit} />
      {editingLead && (
        <EditLeadForm
          lead={editingLead}
          onUpdate={handleUpdate}
          onCancel={() => setEditingLead(null)}
        />
      )}
    </div>
  );
}
