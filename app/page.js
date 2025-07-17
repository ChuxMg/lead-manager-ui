"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

export default function Home() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await axios.get("https://lead-manager-api.onrender.com/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Lead Manager</h1>
      <LeadForm onLeadAdded={(newLead) => setLeads([...leads, newLead])} />
      <LeadList leads={leads} />
    </div>
  );
}
