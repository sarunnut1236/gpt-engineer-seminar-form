import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc, SortDesc, Download } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const mockApplicants = [
  { id: 1, name: "John Doe", email: "john@example.com", school: "Sunrise High School", status: "Pending Interview", province: "Bangkok", level: "High School", grade: "12" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", school: "Evergreen Academy", status: "Accepted", province: "Chiang Mai", level: "High School", grade: "11" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", school: "Oakwood International School", status: "Pending Confirmation", province: "Phuket", level: "High School", grade: "10" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", school: "Maple Grove High", status: "Round #1 Pass", province: "Bangkok", level: "High School", grade: "12" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", school: "Pinecrest Academy", status: "Completed Application Form", province: "Chiang Mai", level: "High School", grade: "11" },
];

const Registrar = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = mockApplicants.filter(applicant => 
      Object.values(applicant).some(value => 
        value.toString().toLowerCase().includes(term)
      )
    );
    setApplicants(filtered);
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const exportToGoogleSheets = () => {
    console.log('Exporting to Google Sheets...');
    // Implement the actual export functionality here
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applicants.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2C3539] p-8">
      <Card className="bg-[#FFFEFA] shadow-lg rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-semibold">Applicant Registry</CardTitle>
          <Button onClick={exportToGoogleSheets} className="bg-[#2C3539] hover:bg-[#4A5459] text-white">
            <Download className="mr-2 h-4 w-4" /> Export to Google Sheets
          </Button>
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
                <TableHead className="cursor-pointer" onClick={() => handleSort('province')}>
                  Province {sortField === 'province' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('level')}>
                  Level {sortField === 'level' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('grade')}>
                  Grade {sortField === 'grade' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
                  Status {sortField === 'status' && (sortDirection === 'asc' ? <SortAsc className="inline h-4 w-4" /> : <SortDesc className="inline h-4 w-4" />)}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell>{applicant.school}</TableCell>
                  <TableCell>{applicant.province}</TableCell>
                  <TableCell>{applicant.level}</TableCell>
                  <TableCell>{applicant.grade}</TableCell>
                  <TableCell>{applicant.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-between items-center">
            <p>Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, applicants.length)} of {applicants.length} entries</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                </PaginationItem>
                {[...Array(Math.ceil(applicants.length / itemsPerPage))].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1}>
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(applicants.length / itemsPerPage)} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registrar;