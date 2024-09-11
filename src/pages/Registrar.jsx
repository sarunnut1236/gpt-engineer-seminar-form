import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc, SortDesc } from 'lucide-react';

const mockApplicants = [
  { id: 1, name: "John Doe", email: "john@example.com", school: "Sunrise High School", status: "Pending Interview" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", school: "Evergreen Academy", status: "Accepted" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", school: "Oakwood International School", status: "Pending Confirmation" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", school: "Maple Grove High", status: "Round #1 Pass" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", school: "Pinecrest Academy", status: "Completed Application Form" },
];

const Registrar = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = mockApplicants.filter(applicant => 
      Object.values(applicant).some(value => 
        value.toString().toLowerCase().includes(term)
      )
    );
    setApplicants(filtered);
  };

  const handleSort = (field) => {
    const direction = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(direction);
    const sorted = [...applicants].sort((a, b) => {
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setApplicants(sorted);
  };

  const handleFilter = (status) => {
    if (status === 'all') {
      setApplicants(mockApplicants);
    } else {
      const filtered = mockApplicants.filter(applicant => applicant.status === status);
      setApplicants(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <Card className="bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Applicant Registry</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-64"
              />
            </div>
            <Select onValueChange={handleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending Interview">Pending Interview</SelectItem>
                <SelectItem value="Accepted">Accepted</SelectItem>
                <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
                <SelectItem value="Round #1 Pass">Round #1 Pass</SelectItem>
                <SelectItem value="Completed Application Form">Completed Application Form</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                  Name {sortField === 'name' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('email')}>
                  Email {sortField === 'email' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('school')}>
                  School {sortField === 'school' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
                  Status {sortField === 'status' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell>{applicant.school}</TableCell>
                  <TableCell>{applicant.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registrar;